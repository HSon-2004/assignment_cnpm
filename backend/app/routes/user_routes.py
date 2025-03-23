from flask import Blueprint, request, jsonify
from app.services.user_service import UserService

user_routes = Blueprint('user_routes', __name__)
user_service = UserService()

@user_routes.route('/users', methods=['POST'])
def create_user():
    data = request.json
    user = user_service.create_user(data)
    return jsonify(user), 201

@user_routes.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    user = user_service.get_user(user_id)
    if user:
        return jsonify(user), 200
    return jsonify({'message': 'User not found'}), 404

@user_routes.route('/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.json
    user = user_service.update_user(user_id, data)
    if user:
        return jsonify(user), 200
    return jsonify({'message': 'User not found'}), 404

@user_routes.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    success = user_service.delete_user(user_id)
    if success:
        return jsonify({'message': 'User deleted'}), 204
    return jsonify({'message': 'User not found'}), 404