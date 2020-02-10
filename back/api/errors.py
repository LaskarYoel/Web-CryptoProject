from flask import jsonify

def bad_request(message):
    resp = jsonify(message)
    resp.status_code = 400
    return resp