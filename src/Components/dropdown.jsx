import React, { useState } from 'react';
import './CSS/NavBar.css';
import { useNavigate } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const options = [
    { value: '/profile', label: 'Settings' },
    { value: '/login', label: 'Log Out' },
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
      <button className="nav-profile-button" id="profile-button" onClick={toggleDropdown}>
        <center><img src="/navAssets/profile-icon-default.png" className="nav-profile-pic"></img></center>
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
