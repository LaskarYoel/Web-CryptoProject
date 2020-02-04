
from flask import Flask
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
import requests 

key = "8bd59f7c5dc27e27f259e63e5201212f3442f7f1a9978ebd4302009570c3cc49"
cryptos = "BTC,ETH,XRP,BCH,BSV,USDT,LTC,EOS,BNB,ADA,XTZ,ETC,XLM,XMR,TRX,DASH,LINK,MIOTA,LEO,NEO,HT,ATOM,CRO,HEDG,ZEC,MKR,ONT,USDC,XEM,VET,BAT,DOGE,ICX,PAX,FTT,QTUM,DCR,BTG,SNX,RVN,REP,ZRX,ALGO,LSK,TUSD,OMG,OKB,ZB,SXP,BCD"

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/TWEBDATA"
mongo = PyMongo(app)
user = mongo.db.user

# @app.route("/")
# def hello_www():
#     return "Hello World Wide Web!"

@app.route("/")
def home_page():
    online_users = mongo.db.users.find({"online": True})
    print("MON PRINT")
    return "coucou"

    
@app.route('/users', methods=['GET'])
def users():
	users = mongo.db.user.find()
	resp = dumps(users)
	return resp

@app.route('/user/<id>', methods=['GET'])
def user(id):
	user = mongo.db.user.find_one_or_404({'_id': ObjectId(id)})
	resp = dumps(user)
	return resp

# curl -d '{"first_name":"MARION", "last_name":"Dylan"}' -H "Content-Type: application/json" -X POST http://127.0.0.1:5000/user

@app.route('/user', methods=['POST'])
def add_user():
	_json = request.json
    # print(request)
	_first_name = _json['first_name']
	_last_name = _json['last_name']
	# validate the received values
	if _first_name and _last_name and request.method == 'POST':
		#do not save password as a plain text
		# _hashed_password = generate_password_hash(_password)
		# save details
		id = mongo.db.user.insert({'first_name': _first_name, 'last_name': _last_name})
		resp = jsonify('User added successfully!')
		resp.status_code = 200
		return resp
	else:
		return not_found()
        
# curl -d '{"first_name":"MOHAMED", "last_name":"Sheikh"}' -H "Content-Type: application/json" -X PUT http://127.0.0.1:5000/user/5e38317c87445ca0f1ef9b5a

@app.route('/user/<id>', methods=['PUT'])
def update_user(id):
	_json = request.json
	_first_name = _json['first_name']
	_last_name = _json['last_name']		
	# validate the received values
	if _first_name and _last_name and id and request.method == 'PUT':
		#do not save password as a plain text
		# _hashed_password = generate_password_hash(_password)
		# save edits
		mongo.db.user.update_one({'_id': ObjectId(id) if '$oid' in id else ObjectId(id)}, {'$set': {'first_name': _first_name, 'last_name': _last_name}})
		resp = jsonify('User updated successfully!')
		resp.status_code = 200
		return resp
	else:
		return not_found()

# curl -X DELETE http://127.0.0.1:5000/user/5e38321c87445ca0f1ef9b5b

@app.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
	mongo.db.user.delete_one({'_id': ObjectId(id)})
	resp = jsonify('User deleted successfully!')
	resp.status_code = 200
	return resp



@app.route('/cryptos', methods=['GET'])
def cryptos():
    r = requests.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,USDT,LTC,EOS,BNB,ADA,XTZ,ETC,XLM,XMR,TRX,DASH,LINK,MIOTA,LEO,NEO,HT,ATOM,CRO,HEDG,ZEC,MKR,ONT,USDC,XEM,VET,BAT,DOGE,ICX,PAX,FTT,QTUM,DCR,BTG,SNX,RVN,REP,ZRX,ALGO,LSK,TUSD,OMG,OKB,ZB,SXP,BCD&tsyms=EUR&api_key={key}')
    # Just DISPLAY IN EURO
    # FROMSYMBOL, PRICE, IMAGEURL, LASTUPDATE, VOLUMEDAYTO, MKTCAP, CHANGEPCT24HOUR
    response = r.text
    return response


   
   

    # ETH,LTC,BTC,ZEC,DASH,BCH,IOTA,XMR  



