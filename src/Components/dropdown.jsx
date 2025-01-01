import React, { useState } from 'react';
import './CSS/NavBar.css';
import { useNavigate } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [selectedOption, setSelectedOption] = useState(null);
  const image = document.createElement("img");
  image.src = "public\vite.svg";

  const options = [
    { link: '/profile', label: 'Settings' },
    { value: '/logout', label: 'Log Out' },
    { value: '/hackmerced', label: 'HackMerced X' }

    
=======
  const navigate = useNavigate();

  const options = [
    { value: '/profile', label: 'Settings' },
    { value: '/login', label: 'Log Out' },
    // { value: '/hackmerced', label: 'HackMerced X' },
>>>>>>> 27e9616634f22cafd0f0063c2022d0a2d32d870b
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    navigate(option.value);
  };

  return (
    <div className="dropdown">
      <button className="button" id="profile-button" onClick={toggleDropdown}>
<<<<<<< HEAD
        {selectedOption ? selectedOption.src : 'public\vite.svg' }
=======
        Profile
>>>>>>> 27e9616634f22cafd0f0063c2022d0a2d32d870b
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="button"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
