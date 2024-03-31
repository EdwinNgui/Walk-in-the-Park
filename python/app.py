from flask import Flask, jsonify, request, url_for, redirect
from geoapify import get_district_suburb_city
from gemini import generate_response

app = Flask(__name__)

response =     {
        "location": "h",
        "culture": "h",
        "song": "h"
    }

@app.route('/get_song')
def get_song():
    lat = float(request.args.get('lat'))
    long = float(request.args.get('long'))
    location = get_district_suburb_city(lat,long)
    #print(location)
    cultural_descriptor = (generate_response([
        "What cultural communities is " + ", ".join(location) + " known for? Return only a short list with the different communities in one line seperated by commas."
        ]))
    #print(cultural_descriptor)
    descriptor = (generate_response([
        "Here is the template for the sample output you should return (genre, year, city, country): Post-Impressionist, 1888, France. Now given this area descriptor: " + ", ".join(location) + " and the cultures " + cultural_descriptor +" output something in the same format as the sample I have provided. Do not return any errors, use the area's culture and demographic as inspiration if you can't think of anything."
        ]))
    #print(descriptor)
    song = (generate_response(["recommend me a song by its name and artist only, inspired by the terms " + descriptor +". This should not contain any of the terms in the title though, and recommend me only songs that are more likely to be commonly known songs if possible."]))
    #print(song)
    response["location"] = location
    response["culture"] = cultural_descriptor
    response["song"] = song

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6450)  # Change port as needed