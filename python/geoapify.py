import os
from dotenv import load_dotenv

load_dotenv()
GEOAPIFY_KEY = os.getenv('GEOAPIFY_KEY')

import requests,json
from requests.structures import CaseInsensitiveDict

def get_district_suburb_city(lat,long):
    url = ("https://api.geoapify.com/v1/geocode/reverse?lat=%f&lon=%f&apiKey=%s" % (lat,long,GEOAPIFY_KEY))

    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"

    resp = requests.get(url, headers=headers)

    resp_data = json.loads(resp.text)
    district = (resp_data["features"][0]["properties"].get("district"))
    suburb = (resp_data["features"][0]["properties"].get("suburb"))
    city = (resp_data["features"][0]["properties"].get("city"))
    return [district,suburb,city]

#print(get_district_suburb_city(45.3500402,-75.7468999))