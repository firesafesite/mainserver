import requests
import json
from bs4 import BeautifulSoup
base = 'http://hpwren.ucsd.edu/cameras/' 

r = requests.get(base)
soup = BeautifulSoup(r.text, 'html.parser')

iframes = soup.find_all('iframe')
data = {}
# {location: {title: ..., imgs: [...]}}
for f in iframes:
    re = requests.get(base + f.get('src'))

    soup2 = BeautifulSoup(re.text, 'html.parser')
    data[f.get('src')] = {"location": soup2.title.text.split('-')[-1].strip(), "imgs": []}

    images = soup2.find_all('img')
    for im in images:
        print(im.get('src'))
        data[f.get('src')]["imgs"].append(im.get('src'))

print(data)
with open('data.json', "w+") as f:
    f.write(json.dumps(data))