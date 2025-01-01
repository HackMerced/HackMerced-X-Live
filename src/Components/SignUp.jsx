


import { useState } from "react";
import "./CSS/SignUp.css";

function SignUp() {
  const [isAvatarFormVisible, setIsAvatarFormVisible] = useState(false);

  const customizeAvatarClick = () => {
    setIsAvatarFormVisible(!isAvatarFormVisible);
  };

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
            <button type="button" onClick={customizeAvatarClick}>
              Customize Avatar
            </button>

            {/* Avatar Editor Modal */}
            {isAvatarFormVisible && (
              <div className="avatar-customization-modal">
                <iframe
                  src="https://beanheads.robertbroersma.com/editor/?accessory=shades&body=chest&circleColor=blue&clothing=tankTop&clothingColor=green&eyebrows=angry&eyes=leftTwitch&faceMask=false&faceMaskColor=white&facialHair=stubble&graphic=redwood&hair=long&hairColor=brown&hat=none5&hatColor=blue&lashes=false&lipColor=purple&mask=true&mouth=serious&skinTone=brown"
                  width="100%"
                  height="10%"
                  frameBorder="0"
                ></iframe>
                <button onClick={() => setIsAvatarFormVisible(false)}>
                  Close Editor
                </button>
              </div>
            )}

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


// import React, { useState } from 'react';

// function SignUp() {
//   const [avatarUrl, setAvatarUrl] = useState('');
//   const [isEditorOpen, setIsEditorOpen] = useState(false);

//   // Function to open the Beanhead editor
//   const openEditor = () => {
//     // Open the Beanhead editor in a new window or iframe
//     const editorWindow = window.open(
//       'https://beanheads.robertbroersma.com/editor',
//       '_blank',
//       'width=800,height=600'
//     );

//     // You can listen for events or trigger the download link after customization
//     editorWindow.addEventListener('message', (event) => {
//       if (event.origin === 'https://beanheads.robertbroersma.com') {
//         const svgData = event.data;  // Assuming editor sends SVG data (or URL)
//         // Convert SVG data to a Data URL (Base64-encoded)
//         const dataUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;
//         setAvatarUrl(dataUrl); // Save the Data URL (or URL if available)
//         console.log('Avatar URL:', dataUrl);
//       }
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Here you can submit the avatar URL to your backend and store it in the database
//     console.log('Avatar URL:', avatarUrl);

//     // Example: submit form data with avatarUrl
//     // axios.post('/api/register', { avatar: avatarUrl, ...formData });
//   };

//   return (
//     <div className="signup-container">
//       <h1>User Registration</h1>
//       <form onSubmit={handleFormSubmit}>
//         {/* Other form fields */}

//         <button type="button" onClick={openEditor}>
//           Customize Avatar
//         </button>

//         {/* Display the avatar URL */}
//         <input
//           type="text"
//           placeholder="Avatar URL"
//           value={avatarUrl}
//           disabled
//         />

//         {/* Submit button */}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
