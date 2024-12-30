import React, { useState } from 'react';
import './CSS/NavBar.css';
import { useNavigate } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const options = [
    { value: '/profile', label: 'Settings' },
    { value: '/login', label: 'Log Out' },
    // { value: '/hackmerced', label: 'HackMerced X' },
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
        Profile
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
