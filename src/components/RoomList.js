import React from 'react';
import './RoomList.css'; // Import CSS cho danh sách phòng

const RoomList = ({ rooms }) => {
  return (
    <div className="room-list">
      {rooms.length > 0 ? (
        <div className="room-grid">
          {rooms.map(room => (
            <div key={room.id} className="room-card">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <span className={`room-type ${room.type.replace(/\s+/g, '-').toLowerCase()}`}>{room.type}</span>
              <span className={`room-status ${room.status === 'Còn Trống' ? 'available' : 'booked'}`}>
                {room.status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có phòng nào.</p>
      )}
    </div>
  );
};

export default RoomList;
