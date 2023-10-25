from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import json_util
from flask import Response
import json

app = Flask(__name__)
CORS(app)
CORS(app, origins=["http://localhost:3000"])

app.config["MONGO_URI"] = "mongodb+srv://it-klassen:qwerty123456@erlends-cluster.knvv8je.mongodb.net/smarthus"
mongo = PyMongo(app)

@app.route('/light/<string:light_name>', methods=['GET', 'PUT'])
def light_status(light_name):
    lights = mongo.db.lights

    if request.method == 'GET':
        light = lights.find_one({"name": light_name})
        if light:
            return jsonify({"name": light["name"], "isOn": light["isOn"]})
        else:
            return jsonify({"error": "Light not found"}), 404

    elif request.method == 'PUT':
        new_status = request.json.get('isOn')
        if new_status is not None and isinstance(new_status, bool):
            lights.update_one({"name": light_name}, {"$set": {"isOn": new_status}})
            return jsonify({"success": "Light status updated"}), 200
        else:
            return jsonify({"error": "Invalid status provided"}), 400

@app.route('/lights', methods=['GET'])
def get_all_lights():
    all_lights = list(mongo.db.lights.find())
    return Response(json.dumps(all_lights, default=json_util.default), mimetype="application/json")

if __name__ == "__main__":
    app.run(debug=True)