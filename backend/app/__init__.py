# app/__init__.py

from flask import Flask
from .config.settings import Config
from .routes import user_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Register blueprints
    app.register_blueprint(user_routes.bp)

    return app