import React, { useState } from 'react';
import './BookingRoom.css'; // Import CSS để thiết kế giao diện

const BookingRoom = () => {
    // Danh sách phòng với trạng thái ban đầu
    const [rooms, setRooms] = useState([
        { id: 1, name: 'Phòng A', description: 'Phòng học hiện đại với máy chiếu.', type: 'Phòng Có Máy Chiếu', status: 'Còn Trống' },
        { id: 2, name: 'Phòng B', description: 'Phòng họp với bàn tròn.', type: 'Phòng Thường', status: 'Còn Trống' },
        { id: 3, name: 'Phòng C', description: 'Phòng hội thảo với máy chiếu và loa.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Còn Trống' },
        { id: 4, name: 'Phòng D', description: 'Phòng học cơ bản không có thiết bị hỗ trợ.', type: 'Phòng Thường', status: 'Đã Đặt' },
        { id: 5, name: 'Phòng E', description: 'Phòng đào tạo với máy chiếu.', type: 'Phòng Có Máy Chiếu', status: 'Còn Trống' },
    ]);

    // Hàm đặt phòng
    const handleBookRoom = (id) => {
        setRooms(prevRooms =>
            prevRooms.map(room =>
                room.id === id ? { ...room, status: 'Đã Đặt' } : room
            )
        );
    };

    return (
        <div className="booking-container">
            <h1 className="booking-title"> ĐẶT PHÒNG HỌC CÒN TRỐNG  </h1>

            <div className="room-list">
                {rooms.map(room => (
                    <div key={room.id} className="room-card">
                        <h3>{room.name}</h3>
                        <p>{room.description}</p>
                        <span className={`room-type ${room.type.replace(/\s+/g, '-').toLowerCase()}`}>{room.type}</span>
                        <span className={`room-status ${room.status === 'Còn Trống' ? 'available' : 'booked'}`}>
                            {room.status}
                        </span>
                        
                        {/* Hiển thị nút đặt phòng nếu phòng còn trống */}
                        {room.status === 'Còn Trống' && (
                            <button className="book-btn" onClick={() => handleBookRoom(room.id)}>
                                Đặt Phòng
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingRoom;
