from flask import Flask
from flask_pymongo import PyMongo
from app.routes.user_routes import user_routes
from app.config.settings import MONGO_URI

def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = MONGO_URI
    mongo = PyMongo(app)

    app.register_blueprint(user_routes)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)