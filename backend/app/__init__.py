# app/__init__.py

from flask import Flask

from .database import init_db
from .seed_data import seed_data


def create_app():
    app = Flask(__name__)
    init_db()
    seed_data()

    return app
