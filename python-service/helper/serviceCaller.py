import requests

BaseUrl = "http://dot-net-service:4000"
headers = {
    "Content-Type": "application/json"
}

def post(endpoint, payload):
    response = requests.post(url=BaseUrl + endpoint, data=payload, headers=headers)
    return response.json()

def get(endpoint):
    response = requests.get(url=BaseUrl + endpoint, headers=headers)
    return response.json()

def put(endpoint, payload): 
    response = requests.put(url=BaseUrl + endpoint, headers=headers, data=payload)
    return response.json()