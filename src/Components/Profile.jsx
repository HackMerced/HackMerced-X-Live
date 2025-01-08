import React from 'react';
import './CSS/Profile.css'


function Profile() {
    return (
      <>
        <div className="profile-container">
          <div className="profile">
            <div className="profile-content">
              <h1>Profile</h1>
            </div>  
          </div>
          <div className="points">
            <div className="profile-content">
              <h1>Points</h1>
              <p>100</p>
            </div>
          </div>
          <div className="info">
            <form>
              <h1>Personal Information</h1>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Badge ID Code" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Pronouns" />
              <input type="text" placeholder="School" />
              <input type="text" placeholder="Major" />
              <br />
              <br />
              <button type="submit">Update</button>
            </form>
          </div>
          <div className="voucher">
            <form>
              <h1>Enter Voucher Codes</h1>
              <input type="text" placeholder="Voucher Code" />
              <br />
              <br />
              <button type="submit">Redeem</button>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default Profile;