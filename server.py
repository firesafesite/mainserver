# flask yolov8 server that takes in an image and returns the bounding boxes and percentages

import cv2
from flask import Flask, request, jsonify, send_file
import requests
from flask_cors import CORS
from ultralytics import YOLO
from flask_cors import CORS
import os
import random
import string
import io
from PIL import Image
model = YOLO('best.pt')

app = Flask(__name__)
CORS(app)


# imput wil come as either base 64 encoded string or a url

@app.route('/predict', methods=['POST'])
def predict():
    # check if post request has either a url or a base64 encoded string
    # print(request.form["url"])


    if request.values['url'] is not None:
        try:
            url = request.values['url']
            print(url)
            result = model(url)
            result = result
            boxes = result[0].boxes
            print(boxes)
            box = boxes[0]  # returns one box
            print(box.xyxy)
            res_plotted = result[0].plot()
            print(type(res_plotted), "type of res plotted")
            
            # upload plotted image to server

            print(res_plotted)
            cv2.imshow('image', res_plotted)
            cv2.imwrite('image.png', res_plotted)
            c = requests.post('http://144.202.65.241:5000/upload', files={'image': open('image.png', 'rb') }).text
            repy = {'image': "http://144.202.65.241:5000/download/"+c+".png", "confidence": round(box.conf[0].item()*100, 3), "detection": True}
        except Exception as e:
            url = request.values['url']
            repy = {"detection": False, "error": str(e), "image": url}
            
        return repy, 200, {'ContentType': 'application/json'}
        

    return jsonify({'error': 'no image or url provided'})


CORS(app)

# create a folder to store the images
if not os.path.exists('images'):
    os.makedirs('images')
    

# function to generate a random string of length 6
def randomString(stringLength=6):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))


@app.route('/upload', methods=['POST'])
def upload():
         # get the image from the request
    img = request.files['image']

    # get the random string
    rand = randomString()
    
    # save the image
    img.save('images/' + rand + '.png')

    # return the random string
    return rand

@app.route('/download', methods=['POST'])
def download():
    # get the random string from the request
    rand = request.data.decode('utf-8')

    # open the image
    img = Image.open('images/' + rand + '.png')

    # convert the image to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format='PNG')
    img_bytes = img_bytes.getvalue()

    # return the image
    return send_file(io.BytesIO(img_bytes), mimetype='image/png')

@app.route('/download/<string:rand>', methods=['GET'])
def download2(rand):
    
    # open the image
    img = Image.open('images/' + rand + '.png')

    # convert the image to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format='PNG')
    img_bytes = img_bytes.getvalue()

    # return the image
    return send_file(io.BytesIO(img_bytes), mimetype='image/png')

app.run(debug=True, host="0.0.0.0")