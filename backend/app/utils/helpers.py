def validate_email(email):
    import re
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

def hash_password(password):
    from werkzeug.security import generate_password_hash
    return generate_password_hash(password)

def format_response(data, message=None, status='success'):
    return {
        'status': status,
        'message': message,
        'data': data
    }