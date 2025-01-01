// import React from 'react';
import './CSS/Login.css'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


function Login() {
  const navigate = useNavigate();
    return (
      <>
        <div className="login-container">
            <h1 className="title">User Login</h1>
            <form className='login-form'>
              <input type="email" name="" id="email" placeholder='Email'/>
              <input type="password" name="" id="pw" placeholder='Password'/>
              <button type="submit" id='login'>Login</button>
              <button type="button"
              id='signup'
              onClick={() => navigate('/signup')}
              >New User?</button>
            </form>
        </div>
      </>
      
    );
  }
  
  export default Login;