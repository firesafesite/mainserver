import json
import os
import time
from io import BytesIO

import cv2
import numpy as np
import requests
from PIL import Image
from ultralytics import YOLO

model = YOLO(os.path.join(os.path.dirname(__file__), "model.pt"))
updated_at = time.time()

SAVE_DATA = True


def predict(source: str | Image.Image) -> dict:
    """
    Performs object detection on the image from the given URL or from a PIL Image.Image object using a pre-trained YOLO model.
    Saves the annotated image and a JSON file with detection information.
    Returns the confidence score of the detected object.

    Args:
    - url (str): The URL of the image to perform object detection on.

    Returns:
    - confidence (float): The confidence score of the detected object, rounded to three decimal places.
      If an error occurs during object detection, or there is no detection, -1 is returned.
    """

    data = {"detection": False, "confidence": -1}

    # Generate a unique filename for the image
    filename = f"{time.time()}.jpg"

    try:
        # Download the image content from the URL & convert to np array
        if isinstance(source, str):
            response = requests.get()
            response.raise_for_status()
            image = np.array(Image.open(BytesIO(response.content)))
        else:
            image = np.array(source)

        # Perform object detection using the YOLO model
        result = model(image)
        boxes = result[0].boxes

        if len(boxes) > 0:
            # Print the coordinates of the first bounding box
            print(boxes[0].xyxy)

            # Generate a visual plot of the detection results
            res_plotted = result[0].plot()

            # Save the annotated image
            if SAVE_DATA:
                cv2.imwrite(f"./set-images/{filename}", res_plotted)

            # Update the data dictionary with detection information
            data["detection"] = True
            data["confidence"] = round(boxes[0].conf[0].item() * 100, 3)

        # Save the JSON file with detection information
        if SAVE_DATA:
            with open(f"./set-images/{filename}.json", "w") as json_file:
                json.dump(data, json_file)

        return data

    except Exception as e:
        print(e)

        # Save the image and JSON file with default values
        if SAVE_DATA:
            with open(f"./set-images/{filename}", "wb") as image_file:
                image_file.write(response.content)

            with open(f"./set-images/{filename}.json", "w") as json_file:
                json.dump(data, json_file)

        return data
