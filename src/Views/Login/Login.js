import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import {signIn} from '../../Controllers/Redux/authSlice';


function Login() {
  const dispatch = useDispatch();

  // local state using hooks
  const [formInput, setFormInput] = useState({
    name: "",
    password: ""
  })

  const handleChange = event => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    })
  }

  const submitForm = event => {
    // pass a payload into the dispatch
    dispatch(signIn(formInput));
    event.preventDefault();
  }

  return (
    <section className="login-page">
      <form className="login-panel">
        <h1>Login</h1>
        <input 
          name="name"
          className="name input"
          placeholder="name" 
          onChange={handleChange} 
          value={formInput.name}
        />
        <input 
          name="password" 
          className="password input"
          type="password" 
          placeholder="Password" 
          onChange={handleChange} 
          value={formInput.password}
        />
        <button type="submit" onClick={submitForm}>Login</button>
      </form>
    </section>
  )
}

export default Login;