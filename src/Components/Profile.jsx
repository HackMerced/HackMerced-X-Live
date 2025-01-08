import React, { useState } from 'react';
import './CSS/Profile2.css'

function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [objectFit, setObjectFit] = useState("contain"); 

  const defaultProfilePic = "/navAssets/profile-icon-default.png";

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const img = new Image();

      // Set the file as the image source
      reader.onloadend = () => {
        setProfilePic(reader.result); // Set the image as the preview

        img.onload = () => {
          // Check image dimensions and set object-fit accordingly
          if (img.width > img.height) {
            setObjectFit("cover");  // Image is wider than tall
          } else {
            setObjectFit("contain");  // Image is taller than wide
          }
        };

        img.src = reader.result;
      };
      reader.readAsDataURL(file);  // Read the file as a data URL
    }
  };

  return (
    <div className="profile-div">
      
      <div className="profile-title-container-wrapper">
        <div className="profile-title-container">
          <h1>Profile Title</h1>
        </div>
      </div>


      <div className="points-container">
        <img src="/authAssets/PointsPanel.png" className="profile-points-panel" alt="Profile Panel" />
        <h1 className="points-title">Points</h1>
        <h1 className="points-value">100000000</h1>
      </div>

      {/* User Update */}
      <div className="profile-update-container">
        <img src="/authAssets/AuthPanelMobile.png" className="profile-update-panel-mobile" alt="Profile Panel" />
        <img src="/authAssets/AuthPanelShorter.png" className="profile-update-panel" alt="Profile Panel" />
        <h1 className="profile-title">Update Settings</h1>
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
            <div className="profile-update-section">
              <div className="file-upload-container">
              <img
                  src={profilePic || defaultProfilePic} 
                  alt="Profile Preview"
                  className="profile-preview"
                  style={{ objectFit }} // Apply dynamic object-fit style
                />
                {/* {profilePic && <img src={profilePic} alt="Profile Preview" className="profile-preview" />} */}
                <input type="file" className="upload" id="profile_pic" name="profile_pic" accept=".jpg, .jpeg, .png" onChange={handleFileChange}/>
                <label htmlFor="profile_pic" className="upload-label">
                  {profilePic ? "Edit" : "Add"}
                </label>
              </div>
              
              <input type="text" placeholder="Pronouns" />
              <input type="text" placeholder="School" />
              <input type="text" placeholder="Major" />
            </div>
          </div>
          {/* Register Button */}
          <button type="submit" className="profile-button">Update</button>
        </form>
      </div>

      <div className="voucher-container">
        <img src="/authAssets/VoucherPanel.png" className="profile-voucher-panel" alt="Profile Panel" />
        <h1 className="voucher-title">Enter Voucher Codes</h1>
        <form className="voucher-form">
          <input type="text" placeholder="Enter Voucher Code" />
          <button type="submit" className="profile-button">Redeem</button>
        </form>
      </div>

    </div>
  );
}

export default Profile;