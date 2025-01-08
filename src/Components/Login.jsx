// import React from 'react';
import './CSS/Login2.css'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


function Login() {
  const navigate = useNavigate();
    return (
      <>
        <div className="login-container">
            <img src="/authAssets/authPanel.png" className='login-panel' alt='Login Panel'/>
            <h1 className="login-title">User Login</h1>
            <form className='login-form'>
              <input type="email" name="" id="email" placeholder='Email'/>
              <input type="password" name="" id="pw" placeholder='Password'/>
              <div className="login-button-stack">
                <button type="submit" id='login' className="login-button" onClick={() => navigate('/')}>Login</button>
                <button type="button" id='signup' className="login-button" onClick={() => navigate('/signup')}>New User?</button>
              </div>
            </form>
        </div>
      </>
      
    );
  }
  
  export default Login;