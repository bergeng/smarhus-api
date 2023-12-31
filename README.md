# Smart Home Lighting Control API

This is a simple API built with Flask that allows you to control and retrieve the light status in a smart home system.

## Features

- **Retrieve Light Status**: You can retrieve the status of a specific light based on its name.
- **Update Light Status**: You have the capability to update the status of a light.
- **Retrieve All Lights**: You can retrieve the status of all lights in the system.

## Prerequisites

- Python 3+
- Flask
- PyMongo
- Flask-CORS

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/bergeng/smarhus-api.git
    cd smarhus-api

2. Install dependencies:
    ```bash
    pip install Flask Flask-PyMongo Flask-CORS


## Usage

1. Start the API server:
    ```bash
    python app.py

2. To retrieve the status of a specific light, use:
GET /lights/<light_name>

3. To update the status of a specific light, use:
PUT /lights/<light_name>

4. To retrieve the status of all lights, use:
GET /lights

Contact
- Name: Erlend Bergeng
- Email: bergeng1988@gmail.com