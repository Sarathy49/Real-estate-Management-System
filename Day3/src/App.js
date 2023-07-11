import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignInSignUpPage from './pages/login';

import Navbar from "./pages/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInSignUpPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
