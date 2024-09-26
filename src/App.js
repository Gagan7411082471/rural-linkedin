// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, SignUp, Dashboard } from './Pages'; // Ensure this path is correct

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/signup">Sign Up</a>
                    <a href="/dashboard">Dashboard</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; // Ensure you have this line
