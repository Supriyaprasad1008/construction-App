import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HouseDetail from './pages/HouseDetail';
import Booking from './pages/Booking';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-emerald-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="/book/:id" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
