from mongoengine import connect

def init_db():
    connect(
        db="booking_system",
        host="mongodb://localhost:27017/booking_system"
    )
    print("Database connected!")