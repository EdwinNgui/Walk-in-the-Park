from geoapify import get_district_suburb_city
from gemini import generate_response
location = get_district_suburb_city(45.4104719,-75.7130903)
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