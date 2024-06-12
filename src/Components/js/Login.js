import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../css/login.css';
import BackgroundImage from './Background';
import Logo from './Logo';
import Navbar from './Navbar';
import axios from 'axios';

// Validar localstorage, si ya hay un usuario, no poder redirigir a login



function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     return <Navigate to="/home" replace />;
    // }, [loggedIn]);

    // useEffect debe escuchar al loggedIn, cuando sea true, dentro del useEfect redirigir a la view

    function Usuario() {
        const URL = 'https://lucky-enchantment-production.up.railway.app/login';
        const data = { email: username, password: password };

        axios.post(URL, data)
            .then(function (response) {
                console.log(response.data);
                if (response.status === 200) {
                    if (!localStorage.getItem('sesion')) {
                        localStorage.setItem('sesion', response.data.token);
                        setLoggedIn(true);
                        window.location.href = "/home";
                    }
                } else {
                    alert('Invalid username or password');
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('An error occurred during login');
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Usuario();
    };

    //  if (loggedIn) {
    //      return <Navigate to="/home" replace />;
    // }

    return (
        <>
            <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />

            <div className="login-container">
                <div className="form-container">
                    <p className="title">Pets-Hub</p>
                    <Logo />
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-username">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-password">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="sign">Sign up</button>
                    </form>
                    <br />
                    <br />
                    <p className="signup">Don't have an account?
                        <a rel="noopener noreferrer" href="signup" className=""> Sign up</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
