from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
import requests, json
from . import errors, mongo


def get_all():
    users = mongo.db.user.find()
    resp = dumps(users)
    return resp

def get_by_id(id):
    user = mongo.db.user.find_one_or_404({'_id': id if '$oid' in id else ObjectId(id)})
    resp = dumps(user)
    return resp

# curl -d '{"first_name":"MARION", "last_name":"Dylan"}' -H "Content-Type: application/json" -X POST http://127.0.0.1:5000/user
def insert(_json):
    if "first_name" not in _json or "last_name" not in _json:
        return errors.bad_request('Bad Request we need first_name and last_name')
    mongo.db.user.insert({'first_name': _first_name, 'last_name': _last_name})
    resp = jsonify('User added successfully!')
    resp.status_code = 200
    return resp

# curl -d '{"first_name":"MOHAMED", "last_name":"Sheikh"}' -H "Content-Type: application/json" -X PUT http://127.0.0.1:5000/user/5e38317c87445ca0f1ef9b5a
def update_by_id(id, _json):
    if "first_name" not in _json or "last_name" not in _json:
        return errors.bad_request('Bad Request we need first_name and last_name')
    mongo.db.user.update_one({'_id': id if '$oid' in id else ObjectId(id)}, {'$set': {'first_name': _first_name, 'last_name': _last_name}})
    resp = jsonify('User updated successfully!')
    resp.status_code = 200
    return resp
    
# curl -X DELETE http://127.0.0.1:5000/user/5e38321c87445ca0f1ef9b5b
def delete_by_id(id):
    mongo.db.user.delete_one({'_id': id if '$oid' in id else ObjectId(id)})
    resp = jsonify('User deleted successfully!')
    resp.status_code = 200
    return resp