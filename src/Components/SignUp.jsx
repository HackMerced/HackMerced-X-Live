


import "./CSS/SignUp.css";

function SignUp() {
  

  return (
    <div className="signup-container">
      <h1 className="title">User Registration</h1>
      <form className="form">
        <div className="form-sections">
          {/* Credentials Section */}
          <div className="credentials">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Badge ID Code" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          {/* Profile Section */}
          <div className="profile">
            <input type="file" name="" id="" className="upload"/>
          
            

            <input type="text" placeholder="Pronouns" />
            <input type="text" placeholder="School" />
            <input type="text" placeholder="Major" />
          </div>
        </div>

        {/* Register Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
