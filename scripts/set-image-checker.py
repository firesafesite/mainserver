import json
from server import predict_for_set_image
set_images = json.loads(open("set-images.json").read())


if __name__ == '__main__':
    for _, value in set_images.items():
        for image in value['imgs']:
            predict_for_set_image(image)