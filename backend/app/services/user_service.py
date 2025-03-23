from pymongo import MongoClient
from bson.objectid import ObjectId
from app.models.user import User

class UserService:
    def __init__(self, db_uri, db_name):
        self.client = MongoClient(db_uri)
        self.db = self.client[db_name]
        self.collection = self.db['users']

    def create_user(self, username, email, password):
        user = User(username=username, email=email, password=password)
        result = self.collection.insert_one(user.to_dict())
        return str(result.inserted_id)

    def get_user(self, user_id):
        user_data = self.collection.find_one({"_id": ObjectId(user_id)})
        if user_data:
            return User.from_dict(user_data)
        return None

    def update_user(self, user_id, **kwargs):
        self.collection.update_one({"_id": ObjectId(user_id)}, {"$set": kwargs})

    def delete_user(self, user_id):
        self.collection.delete_one({"_id": ObjectId(user_id)})

    def get_all_users(self):
        users = []
        for user_data in self.collection.find():
            users.append(User.from_dict(user_data))
        return users