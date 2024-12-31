// import React from 'react';
import './CSS/Login.css'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


function Login() {
  const navigate = useNavigate();


  // const [text, setText] = useState('');
  // const [textColor, setTextColor] = useState('black'); // Default text color

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setText(value);

  //   // Change color based on the length of the input or any condition you want
  //   if (value.length > 5) {
  //     setTextColor('red');  // Change color to red if input length > 5
  //   } else {
  //     setTextColor('black'); // Default color
  //   }
  // };

  
    return (
      <>
        <div className="login-container">
            <h1 className="title">User Login</h1>
            <form>
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