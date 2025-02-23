import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của Toastify
import './Register.css'; // Import CSS

const Register = () => {
    // State để lưu trữ thông tin đăng ký
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Xử lý sự kiện đăng ký
    const handleRegister = (e) => {
        e.preventDefault();

        // Kiểm tra các trường nhập
        if (!name || !email || !password || !confirmPassword) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Kiểm tra mật khẩu
        if (password.length < 6) {
            setError("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Đăng ký thành công
        toast.success("🎉 Đăng ký thành công!", { position: "top-right" });
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Đăng Ký</h2>

            {error && <p className="error-message">{error}</p>}

            <form className="register-form" onSubmit={handleRegister}>
                <div className="input-group">
                    <label>Họ và Tên</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập họ và tên" />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" />
                </div>

                <div className="input-group">
                    <label>Mật khẩu</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu" />
                </div>

                <div className="input-group">
                    <label>Xác nhận Mật khẩu</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Nhập lại mật khẩu" />
                </div>

                <button type="submit" className="register-btn">Đăng Ký</button>
            </form>

            {/* Toast Container để hiển thị thông báo */}
            <ToastContainer />
        </div>
    );
};

export default Register;
