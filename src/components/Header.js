import React from 'react';
import './Header.css';  // Import CSS
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="App-header">
    {/* Logo bên trái */}
    <div className="header-left">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  
    {/* Menu điều hướng bên phải */}
    <nav className="header-right">
      <ul>
      <li><Link to="/HomePage">DANH SÁCH PHÒNG  </Link></li>
        <li><Link to="/BookingRoom">ĐẶT PHÒNG</Link></li>
        <li><Link to="/login">ĐĂNG NHẬP </Link></li>
        <li><Link to="/register">ĐĂNG KÍ </Link></li>
        <li><Link to="/logout">ĐĂNG XUẤT  </Link></li>
      </ul>
    </nav>
  </header>
  
);

export default Header;
