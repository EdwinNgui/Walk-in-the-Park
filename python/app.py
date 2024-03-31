from flask import Flask, jsonify, request, url_for, redirect
from geoapify import get_district_suburb_city
from gemini import generate_response
from spotify import get_song_info

app = Flask(__name__)

response =     {
        "location": "h",
        "culture": "h",
        "song_info": "h",
        "history": "h"
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
    song = (generate_response(["recommend me a song by its name and artist only, inspired by the terms " + descriptor +". This should not contain any of the terms in the title though, and recommend me only songs that are more likely to be commonly known songs if possible. Format should be song - artist."]))
    #print(song)
    song_info = get_song_info(song)

    history = generate_response(["Community here refers to both culture and race. Provide a 3-4 sentence brief summary on the challenges faced by this community and how it has affected them up to present day, as well as of how this group of people supports a diverse and inclusive community."])

    response["location"] = location
    response["culture"] = cultural_descriptor
    response["song_info"] = song_info
    response["history"] = history

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6450)  # Change port as needed