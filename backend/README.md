# Python Backend with MongoDB

This project is a Python backend application that uses Flask as the web framework and MongoDB as the database. It provides a simple structure for managing user data with various endpoints for user operations.

## Project Structure

```
python-backend-mongodb
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── models
│   │   ├── __init__.py
│   │   └── user.py
│   ├── routes
│   │   ├── __init__.py
│   │   └── user_routes.py
│   ├── services
│   │   ├── __init__.py
│   │   └── user_service.py
│   ├── config
│   │   ├── __init__.py
│   │   └── settings.py
│   └── utils
│       ├── __init__.py
│       └── helpers.py
├── requirements.txt
├── .env
├── .gitignore
└── README.md
```

**Note:** Please refer to the [docs](docs) folder for more details on the API endpoints and database schema.

## Setup and Run

1. Install python
2. Install pipenv `pip install pipenv`
3. Install shell `pipenv shell`
4. Install dependencies `pipenv install -r requirements.txt`
3. Run the application `python app/main.py`

## License

This project is licensed under the MIT License. See the LICENSE file for more details.