import json

set_images = json.loads(open("set-images.json").read())


if __name__ == '__main__':
    for _, value in set_images.items():
        print(value)
