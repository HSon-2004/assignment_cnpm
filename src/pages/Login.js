import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('❌ Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        if (email === "admin@example.com" && password === "123456") {
            setMessage('🎉 Đăng nhập thành công!');
        } else {
            setMessage('❌ Email hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Đăng Nhập</h2>

            {/* Hiển thị thông báo */}
            {message && <div className="message-box">{message}</div>}

            <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email của bạn" 
                    />
                </div>

                <div className="input-group">
                    <label>Mật khẩu</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu" 
                    />
                </div>

                <button type="submit" className="login-btn">Đăng Nhập</button>
            </form>
        </div>
    );
};

export default Login;
