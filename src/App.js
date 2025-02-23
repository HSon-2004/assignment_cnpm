import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import AboutPage from './pages/AboutPage';


import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BookingRoom from './pages/BookingRoom';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />

        {/* Nội dung chính */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<>
              <Hero />
             
            </>} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/BookingRoom" element={<BookingRoom />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>

        {/* Footer luôn hiển thị */}
      
      </div>
     <Footer />

    </Router>
    
  );
}

export default App;
