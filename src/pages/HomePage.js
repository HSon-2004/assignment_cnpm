import React from 'react';
import RoomList from '../components/RoomList';
import './HomePage.css'; // Import CSS để thiết kế giao diện dashboard

const HomePage = () => {
    const rooms = [
        { id: 1, name: 'Phòng A', description: 'Phòng học hiện đại với máy chiếu.', type: 'Phòng Có Máy Chiếu', status: 'Còn Trống' },
        { id: 2, name: 'Phòng B', description: 'Phòng họp với bàn tròn và màn hình.', type: 'Phòng Thường', status: 'Đã Đặt' },
        { id: 3, name: 'Phòng C', description: 'Phòng hội thảo với máy chiếu và loa.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Còn Trống' },
        { id: 4, name: 'Phòng D', description: 'Phòng học cơ bản không có thiết bị hỗ trợ.', type: 'Phòng Thường', status: 'Đã Đặt' },
        { id: 5, name: 'Phòng E', description: 'Phòng đào tạo với máy chiếu.', type: 'Phòng Có Máy Chiếu', status: 'Còn Trống' },
        { id: 6, name: 'Phòng F', description: 'Phòng hội nghị lớn với dàn âm thanh.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Đã Đặt' },
        { id: 7, name: 'Phòng G', description: 'Phòng học nhóm với bàn ghế linh hoạt.', type: 'Phòng Thường', status: 'Còn Trống' },
        { id: 8, name: 'Phòng H', description: 'Phòng họp cao cấp với máy chiếu và loa.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Còn Trống' },
        { id: 9, name: 'Phòng I', description: 'Phòng giảng dạy với bảng thông minh.', type: 'Phòng Có Máy Chiếu', status: 'Đã Đặt' },
        { id: 10, name: 'Phòng J', description: 'Phòng học lớn với nhiều bàn ghế.', type: 'Phòng Thường', status: 'Còn Trống' },
        { id: 11, name: 'Phòng K', description: 'Phòng hội thảo với màn hình LED.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Còn Trống' },
        { id: 17, name: 'Phòng Q', description: 'Phòng sự kiện có máy chiếu và loa công suất lớn.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Đã Đặt' },
        { id: 18, name: 'Phòng R', description: 'Phòng họp nhỏ gọn, phù hợp cho họp nhanh.', type: 'Phòng Thường', status: 'Còn Trống' },
        { id: 19, name: 'Phòng S', description: 'Phòng hội thảo chuyên nghiệp với âm thanh vòm.', type: 'Phòng Có Máy Chiếu Và Loa', status: 'Đã Đặt' },
        { id: 20, name: 'Phòng T', description: 'Phòng học mở với không gian rộng rãi.', type: 'Phòng Thường', status: 'Còn Trống' }
    ];

    // Phân loại phòng theo loại
    const groupedRooms = {
        'Phòng Thường': rooms.filter(room => room.type === 'Phòng Thường'),
        'Phòng Có Máy Chiếu': rooms.filter(room => room.type === 'Phòng Có Máy Chiếu'),
        'Phòng Có Máy Chiếu Và Loa': rooms.filter(room => room.type === 'Phòng Có Máy Chiếu Và Loa'),
    };

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Danh Sách Phòng</h1>
            <div className="dashboard-container">
                {Object.keys(groupedRooms).map(category => (
                    <div key={category} className="category-section">
                        <h2 className="category-title">{category}</h2>
                        <RoomList rooms={groupedRooms[category]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
