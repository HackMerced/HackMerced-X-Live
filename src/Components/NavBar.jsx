import React from 'react';
import './CSS/NavBar.css';
import Dropdown from './dropdown';
import Hamburger from './Burger';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="NavBar">
        <Hamburger />
        <ul className="nav-items">
          <img src="/navAssets/navbarLeft.png" className="navbarLeft"/>
          <li><Link to="/"><button className="button" id="home-button">Home</button></Link></li>
          <li><Link to="/prizes"><button className="button" id="about-us-button">Prizes</button></Link></li>
          <li><Link to="/schedule"><button className="button" id="schedule-button">Schedule</button></Link></li>
          <li><Link to="/punchcard"><button className="button" id="punch-card-button">PunchCard</button></Link></li>
          <img src="/navAssets/navflair.png" className="navflair"/>
          <Dropdown />
          {/* <li><button className="button" id="profile-button">Profile</button></li> */}
          <img src="/navAssets/navbarRight.png" className="navbarRight"/>
          
        </ul>
        
            
      </div>
    );
}
  
export default NavBar;