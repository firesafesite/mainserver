# flask yolov8 server that takes in an image and returns the bounding boxes and percentages
import base64
import io
import json
import os
import random
import string
import time
from io import BytesIO

import requests
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from PIL import Image
from api.api.predict import predict

UPDATED_AT = time.time()
app = Flask(__name__)
CORS(app)


set_images_data = json.loads(
    open(os.path.join(os.path.dirname(__file__), "set-images.json")).read()
)


@app.route("/api/set-images.json", methods=["GET"])
def _set_images():
    return jsonify(set_images_data)


@app.route("/predict", methods=["POST"])
def predict():
    # check if post request has either a url or a base64 encoded string
    # print(request.form["url"])
    image = None

    if request.values["url"] is not None and request.values["url"] != "":
        # download the image
        if request.values["url"].startswith("http"):
            response = requests.get(request.values["url"])
            response.raise_for_status()
            image = Image.open(BytesIO(response.content))

    if request.values["image"] is not None:
        # convert the base64 string to an image
        image = Image.open(BytesIO(base64.b64decode(request.values["image"])))

    if image is None:
        return jsonify({"error": "no image or url provided"})


CORS(app)

# create a folder to store the images
if not os.path.exists("images"):
    os.makedirs("images")


@app.route("/upload", methods=["POST"])
def upload():
    # function to generate a random string of length 6
    def random_string(stringLength=6):
        letters = string.ascii_lowercase
        return "".join(random.choice(letters) for i in range(stringLength))

    # get the image from the request
    img = request.files["image"]

    # get the random string
    rand = random_string()

    # save the image
    img.save("images/" + rand + ".png")

    # return the random string
    return rand


@app.route("/download", methods=["POST"])
def download():
    # get the random string from the request
    rand = request.data.decode("utf-8")

    # open the image
    img = Image.open("images/" + rand + ".png")

    # convert the image to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format="PNG")
    img_bytes = img_bytes.getvalue()

    # return the image
    return send_file(io.BytesIO(img_bytes), mimetype="image/png")


@app.route("/download/<string:rand>", methods=["GET"])
def download2(rand):
    # open the image
    img = Image.open("images/" + rand + ".png")

    # convert the image to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format="PNG")
    img_bytes = img_bytes.getvalue()

    # return the image
    return send_file(io.BytesIO(img_bytes), mimetype="image/png")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
