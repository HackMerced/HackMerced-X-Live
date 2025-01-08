import React, { useState } from "react";
import "./CSS/SignUp2.css";

function SignUp() {
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
    <div className="signup-container">
      <img src="/authAssets/AuthPanelMobile.png" className="signup-panel-mobile" alt="SignUp Panel" />
      <img src="/authAssets/AuthPanelShorter.png" className="signup-panel" alt="SignUp Panel" />
      <h1 className="signup-title">User Registration</h1>
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
        <button type="submit" className="signup-button">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
