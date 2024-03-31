import os
from dotenv import load_dotenv
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

load_dotenv()
CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# returns song name, album name, artist name, spotify url, album image url
def get_song_info(query):
    '''
    Returns song name, album name, artist name, spotify url, album image url
    Parameters:
        query (str): search query for song
    Returns:
        tuple: song name, album name, artist name, spotify url, album image url
    '''
    data = sp.search(q=query, limit=1)['tracks']['items'][0]
    return {
        "title": data['name'],
        "album": data['album']['name'],
        "artist": data['artists'][0]['name'],
        "spotify": data['external_urls']['spotify'],
        "art": data['album']['images'][0]['url']
        }
