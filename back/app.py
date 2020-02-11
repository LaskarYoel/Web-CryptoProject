from flask import Flask
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
from flask_cors import CORS
from .api import users
import requests
import json
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
    r = requests.get(
        'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,USDT,LTC,EOS,BNB,ADA,XTZ,ETC,XLM,XMR,TRX,DASH,LINK,MIOTA,LEO,NEO,HT,ATOM,CRO,HEDG,ZEC,MKR,ONT,USDC,XEM,VET,BAT,DOGE,ICX,PAX,FTT,QTUM,DCR,BTG,SNX,RVN,REP,ZRX,ALGO,LSK,TUSD,OMG,OKB,ZB,SXP,BCD&tsyms=EUR&api_key={key}')
    intersting_keys = ["FROMSYMBOL", "PRICE", "IMAGEURL",
                       "LASTUPDATE", "VOLUMEDAYTO", "MKTCAP", "CHANGEPCT24HOUR"]
    # 1) Transform a json -> a python object
    data = json.loads(r.text)
    # 2) Clean the python object
    # Pythonista style
    clean_data = [{_k: money if _k == 'FROMSYMBOL' else data["DISPLAY"][money]
                   ['EUR'][_k] for _k in intersting_keys} for money in data["DISPLAY"]]
    response = dumps(clean_data)
    return response


@app.route('/favorite/<id>', methods=['PUT'])
def handle_favorite(id):
    _json = request.json
    return users.add_fav(id, _json)


@app.route('/favorite/<id>', methods=['GET'])
def get_favorite(id):
    return users.get_fav(id)


@app.route('/login', methods=['POST'])
def connexion():
    _json = request.json
    return users.login(_json)
