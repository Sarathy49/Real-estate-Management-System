import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignInSignUpPage from './pages/login/login';


import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      
        <Router> 
         
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInSignUpPage />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
