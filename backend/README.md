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

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd python-backend-mongodb
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add your configuration settings, such as database connection strings.

5. **Run the application:**
   ```bash
   python app/main.py
   ```

## Usage

The application provides the following user-related endpoints:

- **Create User:** `POST /users`
- **Get User:** `GET /users/<id>`
- **Update User:** `PUT /users/<id>`
- **Delete User:** `DELETE /users/<id>`

Refer to the code in `app/routes/user_routes.py` for more details on the endpoints and their implementations.


## License

This project is licensed under the MIT License. See the LICENSE file for more details.