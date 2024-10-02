import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Footer from './Components/Footer';
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
