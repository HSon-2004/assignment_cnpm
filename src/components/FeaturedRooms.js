import React from 'react';
import './FeaturedRooms.css';

const FeaturedRooms = () => {
  const rooms = [
    { id: 1, name: "Phòng Deluxe", price: "1,500,000 VND / đêm", image: "/room1.jpg" },
    { id: 2, name: "Phòng VIP", price: "2,500,000 VND / đêm", image: "/room2.jpg" },
    { id: 3, name: "Phòng Standard", price: "900,000 VND / đêm", image: "/room3.jpg" }
  ];

  return (
    <section className="featured-rooms" id="rooms">
      <h2>Phòng Nổi Bật</h2>
      <div className="room-list">
        {rooms.map(room => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.price}</p>
            <button>Đặt Phòng</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
