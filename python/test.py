import requests

url = 'http://localhost:5000/incomes'
myobj = {
  "description": "lottery",
  "amount": 1000.0
}

x = requests.post(url, json = myobj)

print(x.text)