import "../css/signup.css"
import BackgroundImage from './Background';
import NavBar from "./Navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}



function Signup() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [pointer, setPointer] = useState(true);

  const URL = 'http://localhost:4000/usuarios';
  useEffect(() => {
    if (password === secondPassword) {
      setPointer(false);
    };
  }, [secondPassword]);

  const submitUser = () => {
    const data = { name: name, firstName: firstName, lastName: lastName, dob: dob, email: email, password: password, phone: cellphone }
    axios.post(URL,data)
      .then(function (response) {
        alert("usuario creado")
        window.location.href="/login"

        // if (response.status === 200) {
        // }
      })
      .catch(function (error) {
        console.log(error);
        alert('An error occurred during login');
      });
  }


  const handlePhoneInput = (event) => {
    // Validar que solo se ingresen números

    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }

    // Validar que no se excedan los 10 dígitos
    if (event.target.value.length > 9 && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
  };



  return (
    <>
      <NavBar />
      <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" />
      <div className="signup">
        <form className="form">
          <p className="title">Register</p>
          <p className="message">Registrate para tener acceso completo a la aplicación.</p>
          <div className="flex">
            <label>
              <input required placeholder="" type="text" className="input" onChange={(e) => { setName(e.target.value) }} />
              <span>Nombre</span>
            </label>
            <label>
              <input required placeholder="" type="text" className="input" onChange={(e) => { setFirstName(e.target.value) }} />
              <span>Primer Apellido</span>
            </label>
            <label>
              <input required placeholder="" type="text" className="input" onChange={(e) => { setLastName(e.target.value) }} />
              <span>Segundo apellido</span>
            </label>
          </div>
          <label>
            <input required placeholder="dd/mm/aaaa" type="date" className="input" max={getCurrentDate()} onChange={(e) => { setDOB(e.target.value) }} />
            <span>Fecha de nacimiento</span>
          </label>
          <label>
            <input required placeholder="" type="email" className="input" onChange={(e) => { setEmail(e.target.value) }} />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="tel"
              className="input"
              onKeyPress={handlePhoneInput}
              onInput={handlePhoneInput}
              maxLength={10}
              onChange={(e) => { setCellphone(e.target.value) }}
            />
            <span>Número de teléfono</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" onChange={(e) => { setPassword(e.target.value) }} />
            <span>Password</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" onChange={(e) => { setSecondPassword(e.target.value) }} />
            <span>Confirm password</span>
          </label>
          <button type="submit" className="submit" disabled={pointer} onClick={submitUser}>Submit</button>
          <p className="signin">Already have an account? <a href="/login">Signin</a></p>

        </form>
      </div>
    </>
  );
}

export default Signup;
