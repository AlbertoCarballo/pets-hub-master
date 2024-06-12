import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navigate from 'react-router-dom';
import Login from './Components/js/Login.js';
import Home from './Components/js/Home.js';
import Signup from './Components/js/Signup.js';
import Profile from './Components/js/Profile.js';
import Vaccines from './Components/js/Vaccines.js';
import Adoption from './Components/js/Adoption.js';
import Pets from './Components/js/Pets.js';
import MissingPets from './Components/js/MissingPets.js';
import ReportAbuse from './Components/js/ReportAbuse.js';
import Reports from './Components/js/MyReports.js'
import axios from 'axios';

function App() {
  const isAuthenticated = localStorage.getItem('sesion');
  const url = 'http://localhost:4000/loggear';
  function RequireAuth({ children }) {

    let isLoggedIn = localStorage.getItem('sesion') ? true : false;
    if (isLoggedIn) {
      console.log(localStorage.getItem('sesion'));
      axios.post(url, { token: localStorage.getItem('sesion') }).then(response => {
        if (response.status !== 200) {
          localStorage.clear();
          isLoggedIn = false;
          window.location.href = "/login";
        }
      }).catch(e => { isLoggedIn = false; });
    }
    if (!isLoggedIn) {
      localStorage.clear();
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<RequireAuth>
            <Home />
          </RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reportabuse" element={<ReportAbuse />} />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/missingpets" element={<MissingPets />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

