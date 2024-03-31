from flask import Flask, jsonify, request, url_for, redirect, json
from geoapify import get_district_suburb_city
from gemini import generate_response
from spotify import get_song_info

app = Flask(__name__)

response =     {
        "latitude": "h",
        "longitude": "h",
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
    location = [str(i) for i in location if i is not None]
    cultural_descriptor = (generate_response([
        "What cultural communities is " + ", ".join(location) + " known for? Return only a short list with the different communities in one line seperated by commas."
        ]))
    print(cultural_descriptor)
    descriptor = (generate_response([
        "Here is the template for the sample output you should return (genre, year, city, country): Post-Impressionist, 1888, France. Now given this area descriptor: " + ", ".join(location) + " and the cultures " + cultural_descriptor +" output something in the same format as the sample I have provided. Do not return any errors, use the area's culture and demographic as inspiration if you can't think of anything."
        ]))
    print(descriptor)
    song = (generate_response(["recommend me a song by its name and artist only, inspired by the terms " + descriptor +". This should not contain any of the terms in the title though, and recommend me only songs that are more likely to be commonly known songs if possible. Format should be song - artist."]))
    print(song)
    song_info = get_song_info(song)

    history = generate_response(["Community here refers to both culture and race. Provide a 3-4 sentence brief summary on the challenges faced by this community and how it has affected them up to present day, as well as of how this group of people supports a diverse and inclusive community."])

    response["latitude"] = lat
    response["longitude"] = long
    response["location"] = location
    response["culture"] = cultural_descriptor
    response["song_info"] = song_info
    response["history"] = history

        # Load data from file
    with open("database.json", encoding='utf-8') as jsonFile:
        data = json.load(jsonFile)

    # Modify the data
    data["2024-03-31"] = response

    # Write the modified data back to the file
    with open("database.json", "w", encoding='utf-8') as jsonFile:
        json.dump(data, jsonFile)

    return jsonify(response)

@app.route('/get_location')
def get_location():
    lat = float(request.args.get('lat'))
    long = float(request.args.get('long'))
    location = get_district_suburb_city(lat,long)
    return {"location":[str(i) for i in location if i is not None]}

@app.route('/get_marker')
def get_marker():
    year = str(request.args.get('year')).zfill(2)
    month = str(request.args.get('month')).zfill(2)
    day = str(request.args.get('day')).zfill(2)
    with open('database.json', encoding='utf-8') as fh:
        data = json.load(fh)
    return data.get("%s-%s-%s" % (year,month,day))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6450)  # Change port as needed