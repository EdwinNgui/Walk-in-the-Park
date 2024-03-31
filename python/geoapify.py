#read api key from file:
try:
    with open("geoapify_key", "r") as f:
        api_key = f.read().strip()
except FileNotFoundError:
    print("Error: File 'geoapify_key' not found.")
    exit()

import requests,json
from requests.structures import CaseInsensitiveDict

def get_district_suburb_city(lat,long):
    url = ("https://api.geoapify.com/v1/geocode/reverse?lat=%f&lon=%f&apiKey=%s" % (lat,long,api_key))

    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"

    resp = requests.get(url, headers=headers)

    resp_data = json.loads(resp.text)
    district = (resp_data["features"][0]["properties"]["district"])
    suburb = (resp_data["features"][0]["properties"]["suburb"])
    city = (resp_data["features"][0]["properties"]["city"])
    return [district,suburb,city]

print(get_district_suburb_city(45.3500402,-75.7468999))