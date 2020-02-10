from flask import Flask
from flask_pymongo import PyMongo
# from flask_jwt_extended import (
#     JWTManager, jwt_required, create_access_token,
#     get_jwt_identity
# )

# create the flask object
app = Flask(__name__)
# MONGO CONFIG
app.config['MONGO_URI'] = "mongodb://localhost:27017/TWEBDATA"
mongo = PyMongo(app)
# JWT CONFIG
# app.config['JWT_SECRET_KEY'] = 'BadreTheBest-Nike_toi'  # Change this!
# jwt = JWTManager(app)
