# API Endpoints

## 1.Authentication
POST /auth/login : Log in a user

POST /auth/logout : Log out a user (optional, as JWT is stateless)

## 2.Room Management

GET /rooms : Retrieve all rooms

GET /rooms/<room_id> : Retrieve a room by ID

POST /rooms/create : Create a new room (admin only)

PUT /rooms/<room_id> : Update an existing room (admin only)

DELETE /rooms/<room_id> : Delete a room (admin only)

## 3.Booking Management

GET /bookings : Retrieve all bookings for the logged-in user

GET /bookings/all : Xem tất cả booking (admin only)

GET /bookings/<booking_id> : Retrieve a booking by ID

POST /bookings : Create a new booking (requires `user_id` and `room_id` in the request body)

PUT /bookings/<booking_id> : Update an existing booking 

DELETE /bookings/<booking_id> : Cancel a booking

POST /bookings/<booking_id>/checkin : Check in to a room

# Database Schema

## 1. User
```json
{
    "id": "string",
    "username": "string",
    "password": "string (hash)",
    "email": "string",
    "role": "string", //[student, teacher, admin]
}
```
## 2. Room
```json
{
    "id": "string",
    "name": "string",
    "capacity": "integer",
    "devices" : ["string"],
    "status": "string", //[available, booked, unavailable]
    "datetime": 
        [
            {
                "date": "datetime",
                "time_slot": {
                    "8:00-9:00": "status_time_slot", // [available, booked, unavailable]
                    "9:00-10:00": "status_time_slot",
                    "10:00-11:00": "status_time_slot",
                    "11:00-12:00": "status_time_slot",
                    "13:00-14:00": "status_time_slot",
                    "14:00-15:00": "status_time_slot",
                    "15:00-16:00": "status_time_slot",
                    "16:00-17:00": "status_time_slot",
                }
            }
        ]
}
```
## 3. Booking
```json
{
    "id": "string",
    "user_id": "string",
    "room_id": "string",
    "checkin": "datetime",
    "checkout": "datetime",
    "status": "strings", //[pending, confirmed, checked_in, cancelled]
    "booked_slots": ["string"],
    "created_at": "datetime",
    "updated_at": "datetime",
}
```
