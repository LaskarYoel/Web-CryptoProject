from flask import Flask
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
from flask_cors import CORS
from .api import users
import requests, json
from api import app

CORS(app)
key = "8bd59f7c5dc27e27f259e63e5201212f3442f7f1a9978ebd4302009570c3cc49"
cryptos = "BTC,ETH,XRP,BCH,BSV,USDT,LTC,EOS,BNB,ADA,XTZ,ETC,XLM,XMR,TRX,DASH,LINK,MIOTA,LEO,NEO,HT,ATOM,CRO,HEDG,ZEC,MKR,ONT,USDC,XEM,VET,BAT,DOGE,ICX,PAX,FTT,QTUM,DCR,BTG,SNX,RVN,REP,ZRX,ALGO,LSK,TUSD,OMG,OKB,ZB,SXP,BCD"


@app.route('/users', methods=['GET'])
def get_users():
    return users.get_all()
	

@app.route('/user', methods=['POST'])
def add_user():
    _json = request.json
    return users.insert(_json)


@app.route('/user/<id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(id):
    if request.method == "GET":
        return users.get_by_id(id)
    elif request.method == "PUT":
        _json = request.json
        return users.update_by_id(id, _json)
    else:
        return users.delete_by_id(id)
	

@app.route('/cryptos', methods=['GET'])
def cryptos():
    r = requests.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,USDT,LTC,EOS,BNB,ADA,XTZ,ETC,XLM,XMR,TRX,DASH,LINK,MIOTA,LEO,NEO,HT,ATOM,CRO,HEDG,ZEC,MKR,ONT,USDC,XEM,VET,BAT,DOGE,ICX,PAX,FTT,QTUM,DCR,BTG,SNX,RVN,REP,ZRX,ALGO,LSK,TUSD,OMG,OKB,ZB,SXP,BCD&tsyms=EUR&api_key={key}')
    intersting_keys = ["FROMSYMBOL", "PRICE", "IMAGEURL", "LASTUPDATE", "VOLUMEDAYTO", "MKTCAP", "CHANGEPCT24HOUR"]
    # 1) Transform a json -> a python object
    data = json.loads(r.text)
    # 2) Clean the python object 
    # Pythonista style 
    # clean_data = { money :  {_k: data["DISPLAY"][money]['EUR'][_k] for _k in intersting_keys} for money in data["DISPLAY"] }
    # JS style
    clean_data = {}
    for money in data["DISPLAY"]:
        clean_data[money] = {} 
        for _k in intersting_keys:
            clean_data[money][_k] = data["DISPLAY"][money]['EUR'][_k] 
    # 3) python object to a json data
    response = dumps(clean_data)
    return response




# Provide a method to create access tokens. The create_access_token()
# function is used to actually generate the token, and you can return
# it to the caller however you choose.
# @app.route('/login', methods=['POST'])
# def login():
#     if not request.is_json:
#         return jsonify({"msg": "Missing JSON in request"}), 400

#     username = request.json.get('username', None)
#     password = request.json.get('password', None)
#     if not username:
#         return jsonify({"msg": "Missing username parameter"}), 400
#     if not password:
#         return jsonify({"msg": "Missing password parameter"}), 400

#     if username != 'test' or password != 'test':
#         return jsonify({"msg": "Bad username or password"}), 401

#     # Identity can be any data that is json serializable
#     access_token = create_access_token(identity=username)
#     return jsonify(access_token=access_token), 200
