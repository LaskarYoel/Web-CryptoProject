from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
import requests
import json
from . import errors, mongo
from werkzeug import generate_password_hash, check_password_hash


def get_all():
    users = mongo.db.users.find()
    resp = dumps(users)
    print('_____________________')
    print(users)
    return resp


def get_by_id(id):
    user = mongo.db.users.find_one_or_404(
        {'_id': id if '$oid' in id else ObjectId(id)})
    resp = dumps(user)
    return resp

# curl -d '{"first_name":"first", "last_name":"last", "name":"badre", "email":"dylan@gmil.com", "pwd":"badre"}' -H "Content-Type: application/json" -X POST http://127.0.0.1:5000/user


def insert(_json):
    _first_name = _json['first_name']
    _last_name = _json['last_name']
    _name = _json['name']
    _email = _json['email']
    _password = _json['pwd']
    if "name" not in _json or "email" not in _json or "pwd" not in _json or "last_name" not in _json or "first_name" not in _json:
        return errors.bad_request('Bad Request we need name, pwd and email')
    _hashed_password = generate_password_hash(_password)
    mongo.db.users.insert(
        {'name': _name, 'email': _email, 'pwd': _hashed_password, 'first_name': _first_name, 'last_name': _last_name})
    resp = jsonify('User added successfully!')
    resp.status_code = 200
    return resp


# curl -d '{"first_name":"MOHAMED", "last_name":"Sheikh"}' -H "Content-Type: application/json" -X PUT http://127.0.0.1:5000/user/5e38317c87445ca0f1ef9b5a
def update_by_id(id, _json):
    _first_name = _json['first_name']
    _last_name = _json['last_name']
    _name = _json['name']
    _email = _json['email']
    _password = _json['pwd']
    if "name" not in _json or "email" not in _json or "pwd" not in _json or "last_name" not in _json or "first_name" not in _json:
        return errors.bad_request('Bad Request we need name, pwd and email')
    _hashed_password = generate_password_hash(_password)
    mongo.db.users.update_one({'_id': id if '$oid' in id else ObjectId(id)}, {
                              '$set': {'name': _name, 'email': _email, 'pwd': _hashed_password, 'first_name': _first_name, 'last_name': _last_name}})
    resp = jsonify('User updated successfully!')
    resp.status_code = 200
    return resp

# curl -X DELETE http://127.0.0.1:5000/user/5e42e55c6a817d826d435de3


def delete_by_id(id):
    mongo.db.users.delete_one({'_id': id if '$oid' in id else ObjectId(id)})
    resp = jsonify('User deleted successfully!')
    resp.status_code = 200
    return resp


# curl -d '{"favorite":"BTC", "add": true}' -H "Content-Type: application/json" -X PUT http://127.0.0.1:5000/favorite/5e42e6e641e209639db054c8
# curl -d '{"favorite":"BTC", "add": false}' -H "Content-Type: application/json" -X PUT http://127.0.0.1:5000/favorite/5e42e6e641e209639db054c8

def add_fav(id, _json):
    _favorite = _json['favorite']
    _add = _json['add']
    if "favorite" not in _json:
        return errors.bad_request('Bad Request we need fav')

    _user = mongo.db.users.find_one(
        {'_id': id if '$oid' in id else ObjectId(id)})

    if "favorite" not in _user:
        mongo.db.users.update_one({'_id': id if '$oid' in id else ObjectId(id)}, {
            '$set': {"favorite": [_favorite]}})
        resp = jsonify('Favorite added successfully!')
        resp.status_code = 200
    else:
        if _add == True:
            _bdd_fav = [_user["favorite"]]
            _bdd_fav.append(_favorite)
            print(_bdd_fav)
            mongo.db.users.update_one({'_id': id if '$oid' in id else ObjectId(id)}, {
                '$set': {"favorite": _bdd_fav}})
            resp = jsonify('Favorite added successfully!')
            resp.status_code = 200
        else:
            _bdd_fav = _user["favorite"]
            _bdd_fav.remove(_favorite)
            mongo.db.users.update_one({'_id': id if '$oid' in id else ObjectId(id)}, {
                '$set': {"favorite": _bdd_fav}})
            resp = jsonify('Favorite delete successfully!')
            resp.status_code = 200

    # mongo.db.users.update_one({'_id': id if '$oid' in id else ObjectId(id)}, {
    #                           '$set': {"favorite": _favorite}})
    # resp = jsonify('Favorite added successfully!')
    # resp.status_code = 200
    return "resp"
