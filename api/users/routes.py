from flask import Blueprint, request
from bson import json_util
import json
from database import database
import uuid
from werkzeug import secure_filename

mongoClient = database.get_database()

users_bp = Blueprint(
    'users_bp', __name__,
)


@users_bp.route('/signup', methods=["POST"])
def signUpUser():
    try:
        username = request.json["username"]
        password = request.json["password"]
        email = request.json["email"]

        user = {
            'username': username,
            'password': password,
            'email': email
        }

        user = mongoClient["users"].insert_one(user)

        return {'message': json.loads(json_util.dumps(user)), 'status': 200}

    except Exception as Argument:
        print(Argument)
        return Argument


@users_bp.route('', methods=["GET"])
def getUser():
    try:
        username = request.args.to_dict()["username"]
        user = mongoClient["users"].find_one({'username': username})
        print(json.loads(json_util.dumps(user)))
        return {'user': json.loads(json_util.dumps(user)), 'message': 'sucess', 'status': 200}

    except Exception as Argument:
        print(Argument)
        return Argument

@users_bp.route('/login', methods=["POST"])
def loginUser():
    try:
        username = request.json["username"]
        password = request.json["password"]


        user = mongoClient["users"].find_one({
            'username': username,
            'password': password,
            })

        return {'user': json.loads(json_util.dumps(user)), 'message': 'sucess', 'status': 200}

    except Exception as Argument:
        print(Argument)
        return Argument

'''
NOT COMPLETE
'''
@users_bp.route('/orignalImage', methods=["POST"])
def addOrgImage():
    try:
        f = request.files['file']
        username = request.json["username"]
        fileName = uuid.uuid1()
        
    except Exception as Argument:
        print(Argument)
        return Argument
