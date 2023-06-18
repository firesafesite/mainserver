# flask yolov8 server that takes in an image and returns the bounding boxes and percentages
import json
import cv2
from flask import Flask, request, jsonify, send_file
import requests
from flask_cors import CORS
from ultralytics import YOLO
import numpy as np
from flask_cors import CORS
import os
import random
import string
import io
from PIL import Image
import time
model = YOLO('best.pt')
updated_at = time.time()

app = Flask(__name__)
CORS(app)

# returns confidence
def predict_for_set_image(url):
    global updated_at
    updated_at = time.time()
    data = {"detection": False, "confidence": -1}
    filename = url.split('/')[-1]
    content = requests.get(url).content
    try:
        result = model(np.array(object=content))
        result = result
        boxes = result[0].boxes
        print(boxes)
        box = boxes[0]  # returns one box
        print(box.xyxy)
        res_plotted = result[0].plot()
        print(type(res_plotted), "type of res plotted")

        cv2.imwrite('./set-images/' + filename, res_plotted)
        open('./set-images/'+filename+'.json', 'w').write(json.dumps(data))
        return round(box.conf[0].item()*100, 3)
    except Exception as e:
        print(e)
        open('./set-images/'+filename, 'wb').write(content)
        open('./set-images/'+filename+'.json', 'w').write(json.dumps(data))
        return -1

@app.route('/set-image/<image>', methods=['GET'])
def serve_set_images(image):
    return send_file('./set-images/<image>')

@app.route('/set-images.json', methods=['GET'])
def _set_images():
    return jsonify({
        "updated_at": updated_at,
  "S/bm.html": {
    "location": "Big Black Mountain",
    "imgs": [
      "bm-n-mobo-c-175.jpg",
      "bm-e-mobo-c-175.jpg",
      "bm-s-mobo-c-175.jpg",
      "bm-w-mobo-c-175.jpg"
    ]
  },
  "S/bi.html": {
    "location": "Birch Hill",
    "imgs": [
      "bi-n-mobo-c-175.jpg",
      "bi-e-mobo-c-175.jpg",
      "bi-s-mobo-c-175.jpg",
      "bi-w-mobo-c-175.jpg"
    ]
  },
  "S/bl2.html": {
    "location": "Black Mountain",
    "imgs": [
      "bl-n-mobo-c-175.jpg",
      "bl-e-mobo-c-175.jpg",
      "bl-s-mobo-c-175.jpg",
      "bl-w-mobo-c-175.jpg"
    ]
  },
  "S/bh.html": {
    "location": "Boucher Hill",
    "imgs": [
      "bh-n-mobo-c-175.jpg",
      "bh-e-mobo-c-175.jpg",
      "bh-s-mobo-c-175.jpg",
      "bh-w-mobo-c-175.jpg"
    ]
  },
  "S/buff.html": {
    "location": "Buffalo Bump",
    "imgs": [
      "buff-n-mobo-c-175.jpg",
      "buff-e-mobo-c-175.jpg",
      "buff-s-mobo-c-175.jpg",
      "buff-w-mobo-c-175.jpg"
    ]
  },
  "S/chino.html": {
    "location": "Chino Hills",
    "imgs": [
      "chino-n-mobo-c-175.jpg",
      "chino-e-mobo-c-175.jpg",
      "chino-s-mobo-c-175.jpg",
      "chino-w-mobo-c-175.jpg"
    ]
  },
  "S/ch.html": {
    "location": "Coronado Hills",
    "imgs": [
      "ch-n-mobo-c-175.jpg",
      "ch-e-mobo-c-175.jpg",
      "ch-s-mobo-c-175.jpg",
      "ch-w-mobo-c-175.jpg"
    ]
  },
  "S/cp.html": {
    "location": "Cuyamaca Peak",
    "imgs": [
      "cp-n-mobo-c-175.jpg",
      "cp-e-mobo-c-175.jpg",
      "cp-s-mobo-c-175.jpg",
      "cp-w-mobo-c-175.jpg"
    ]
  },
  "S/dwpgm.html": {
    "location": "Green Peak",
    "imgs": [
      "dwpgm-n-mobo-c-175.jpg",
      "dwpgm-e-mobo-c-175.jpg",
      "dwpgm-s-mobo-c-175.jpg",
      "dwpgm-w-mobo-c-175.jpg"
    ]
  },
  "S/hp.html": {
    "location": "High Point",
    "imgs": [
      "hp-n-mobo-c-175.jpg",
      "hp-e-mobo-c-175.jpg",
      "hp-s-mobo-c-175.jpg",
      "hp-w-mobo-c-175.jpg"
    ]
  },
  "S/69bravo.html": {
    "location": "L.A.Co.F.D Helibase 69 Bravo",
    "imgs": [
      "69bravo-n-mobo-c-175.jpg",
      "69bravo-e-mobo-c-175.jpg",
      "69bravo-s-mobo-c-175.jpg",
      "69bravo-w-mobo-c-175.jpg"
    ]
  },
  "S/wlfd.html": {
    "location": "Lake Wohlford Airport",
    "imgs": [
      "wlfd-n-mobo-c-175.jpg",
      "wlfd-e-mobo-c-175.jpg",
      "wlfd-s-mobo-c-175.jpg",
      "wlfd-w-mobo-c-175.jpg"
    ]
  },
  "S/pi.html": {
    "location": "Los Pinos",
    "imgs": [
      "pi-n-mobo-c-175.jpg",
      "pi-e-mobo-c-175.jpg",
      "pi-s-mobo-c-175.jpg",
      "pi-w-mobo-c-175.jpg"
    ]
  },
  "S/lp.html": {
    "location": "Lyons Peak",
    "imgs": [
      "lp-n-mobo-c-175.jpg",
      "lp-e-mobo-c-175.jpg",
      "lp-s-mobo-c-175.jpg",
      "lp-w-mobo-c-175.jpg"
    ]
  },
  "S/mg.html": {
    "location": "Mesa Grande",
    "imgs": [
      "mg-n-mobo-c-175.jpg",
      "mg-e-mobo-c-175.jpg",
      "mg-s-mobo-c-175.jpg",
      "mg-w-mobo-c-175.jpg"
    ]
  },
  "S/ml.html": {
    "location": "Monument Peak",
    "imgs": [
      "ml-n-mobo-c-175.jpg",
      "ml-e-mobo-c-175.jpg",
      "ml-s-mobo-c-175.jpg",
      "ml-w-mobo-c-175.jpg"
    ]
  },
  "S/wc.html": {
    "location": "Mount Woodson CalFire",
    "imgs": [
      "wc-n-mobo-c-175.jpg",
      "wc-e-mobo-c-175.jpg",
      "wc-s-mobo-c-175.jpg",
      "wc-w-mobo-c-175.jpg"
    ]
  },
  "S/mlo.html": {
    "location": "Mt. Laguna Observatory access site",
    "imgs": [
      "mlo-n-mobo-c-175.jpg",
      "mlo-e-mobo-c-175.jpg",
      "mlo-s-mobo-c-175.jpg",
      "mlo-w-mobo-c-175.jpg"
    ]
  },
  "S/wilson.html": {
    "location": "Mt. Wilson Observatory",
    "imgs": [
      "wilson-n-mobo-c-175.jpg",
      "wilson-e-mobo-c-175.jpg",
      "wilson-s-mobo-c-175.jpg",
      "wilson-w-mobo-c-175.jpg"
    ]
  },
  "S/om.html": {
    "location": "Otay Mountain",
    "imgs": [
      "om-n-mobo-c-175.jpg",
      "om-e-mobo-c-175.jpg",
      "om-s-mobo-c-175.jpg",
      "om-w-mobo-c-175.jpg"
    ]
  },
  "S/rm.html": {
    "location": "Red Mountain (near Fallbrook)",
    "imgs": [
      "rm-n-mobo-c-175.jpg",
      "rm-e-mobo-c-175.jpg",
      "rm-s-mobo-c-175.jpg",
      "rm-w-mobo-c-175.jpg"
    ]
  },
  "S/rdd.html": {
    "location": "Rincon Del Diablo",
    "imgs": [
      "rdd-n-mobo-c-175.jpg",
      "rdd-e-mobo-c-175.jpg",
      "rdd-s-mobo-c-175.jpg",
      "rdd-w-mobo-c-175.jpg"
    ]
  },
  "S/smernsp.html": {
    "location": "SMER North Station Point",
    "imgs": ["smernsp-sw-u180-175.jpg"]
  },
  "S/smertcs9.html": {
    "location": "SMER TCS9",
    "imgs": [
      "smer-tcs9-n-mobo-c-175.jpg",
      "smer-tcs9-e-mobo-c-175.jpg",
      "smer-tcs9-s-mobo-c-175.jpg",
      "smer-tcs9-w-mobo-c-175.jpg"
    ]
  },
  "S/sclm.html": {
    "location": "San Clemente",
    "imgs": [
      "sclm-n-mobo-c-175.jpg",
      "sclm-e-mobo-c-175.jpg",
      "sclm-s-mobo-c-175.jpg",
      "sclm-w-mobo-c-175.jpg"
    ]
  },
  "S/sjh.html": {
    "location": "San Juan Hills",
    "imgs": [
      "sjh-n-mobo-c-175.jpg",
      "sjh-e-mobo-c-175.jpg",
      "sjh-s-mobo-c-175.jpg",
      "sjh-w-mobo-c-175.jpg"
    ]
  },
  "S/sm.html": {
    "location": "San Miguel",
    "imgs": [
      "sm-n-mobo-c-175.jpg",
      "sm-e-mobo-c-175.jpg",
      "sm-s-mobo-c-175.jpg",
      "sm-w-mobo-c-175.jpg"
    ]
  },
  "S/syp.html": {
    "location": "Santa Ynez Peak",
    "imgs": [
      "syp-n-mobo-c-175.jpg",
      "syp-e-mobo-c-175.jpg",
      "syp-s-mobo-c-175.jpg",
      "syp-w-mobo-c-175.jpg"
    ]
  },
  "S/stgo.html": {
    "location": "Santiago Peak",
    "imgs": [
      "stgo-n-mobo-c-175.jpg",
      "stgo-e-mobo-c-175.jpg",
      "stgo-s-mobo-c-175.jpg",
      "stgo-w-mobo-c-175.jpg"
    ]
  },
  "S/srne.html": {
    "location": "Sierra Rojo NE",
    "imgs": ["sr-ne-u180-175.jpg"]
  },
  "S/srsw.html": {
    "location": "Sierra Rojo SW",
    "imgs": ["sr-sw-u180-175.jpg"]
  },
  "S/signal.html": {
    "location": "Signal Peak",
    "imgs": [
      "signal-n-mobo-c-175.jpg",
      "signal-e-mobo-c-175.jpg",
      "signal-s-mobo-c-175.jpg",
      "signal-w-mobo-c-175.jpg"
    ]
  },
  "S/sojr.html": {
    "location": "Sky Oaks",
    "imgs": [
      "sojr-n-mobo-c-175.jpg",
      "sojr-e-mobo-c-175.jpg",
      "sojr-s-mobo-c-175.jpg",
      "sojr-w-mobo-c-175.jpg"
    ]
  },
  "S/tp.html": {
    "location": "Toro Peak",
    "imgs": [
      "tp-n-mobo-c-175.jpg",
      "tp-e-mobo-c-175.jpg",
      "tp-s-mobo-c-175.jpg",
      "tp-w-mobo-c-175.jpg"
    ]
  },
  "S/starr.html": {
    "location": "Upper Bell ",
    "imgs": [
      "starr-n-mobo-c-175.jpg",
      "starr-e-mobo-c-175.jpg",
      "starr-s-mobo-c-175.jpg",
      "starr-w-mobo-c-175.jpg"
    ]
  },
  "S/marconi.html": {
    "location": "Upper Talega",
    "imgs": [
      "marconi-n-mobo-c-175.jpg",
      "marconi-e-mobo-c-175.jpg",
      "marconi-s-mobo-c-175.jpg",
      "marconi-w-mobo-c-175.jpg"
    ]
  },
  "S/vo.html": {
    "location": "Volcan Mountain",
    "imgs": [
      "vo-n-mobo-c-175.jpg",
      "vo-e-mobo-c-175.jpg",
      "vo-s-mobo-c-175.jpg",
      "vo-w-mobo-c-175.jpg"
    ]
  },
  "S/ws.html": {
    "location": "White Star",
    "imgs": [
      "ws-n-mobo-c-175.jpg",
      "ws-e-mobo-c-175.jpg",
      "ws-s-mobo-c-175.jpg",
      "ws-w-mobo-c-175.jpg"
    ]
  },
  "S/bcc1.html": {
    "location": "Boulder Creek Camera 1",
    "imgs": ["bc-mobo-c-175.jpg"]
  },
  "S/bcc2.html": {
    "location": "Boulder Creek Camera 2",
    "imgs": ["bc-2-mobo-c-175.jpg"]
  },
  "S/bcc3.html": {
    "location": "Boulder Creek Camera 3",
    "imgs": ["bc-3-mobo-c-175.jpg"]
  },
  "S/bcc4.html": {
    "location": "Boulder Creek Camera 4",
    "imgs": ["bc-4-mobo-c-175.jpg"]
  },
  "S/bcc5.html": {
    "location": "Boulder Creek Camera 5",
    "imgs": ["bc-5-mobo-c-175.jpg"]
  },
  "S/lcccr.html": {
    "location": "La Cima relay",
    "imgs": ["hpwren-iqeye8-175.jpg"]
  },
  "S/ms.html": {
    "location": "Mt. Soledad 2 (tower)",
    "imgs": ["ms-n-mobo-c-175.jpg"]
  },
  "S/sgbf.html": {
    "location": "Near Anza",
    "imgs": ["sgbf-mobo-c-175.jpg"]
  },
  "S/smertcs10.html": {
    "location": "SMER TCS10",
    "imgs": ["smer-tcs10-1-mobo-c-175.jpg"]
  },
  "S/smertcs3.html": {
    "location": "SMER TCS3",
    "imgs": ["smer-tcs3-mobo-c-175.jpg"]
  },
  "S/smertcs8.html": {
    "location": "SMER TCS8",
    "imgs": ["smer-tcs8-mobo-c-175.jpg"]
  },
  "S/tje.html": {
    "location": "Tijuana Estuary",
    "imgs": ["tje-1-mobo-c-175.jpg"]
  },
  "S/sdsc.html": {
    "location": "UCSD/SDSC East",
    "imgs": ["sdsc-e-mobo-c-175.jpg"]
  }})

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

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)