import React, { useState } from 'react';
import './CSS/NavBar.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: '/profile', label: 'Settings' },
    { value: '/logout', label: 'Log Out' },
    { value: '/hackmerced', label: 'HackMerced X' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="button" id="profile-button" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
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