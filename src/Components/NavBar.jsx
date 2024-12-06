import React from 'react';
import './CSS/NavBar.css'

import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <img src="/navAssets/navBarLeftPart.svg" className="navbarEnds"/>
          <li><Link to="/"><button className="button" id="home-button">Home</button></Link></li>
          <li><Link to="/prizes"><button className="button" id="about-us-button">Prizes</button></Link></li>
          <li><Link to="/schedule"><button className="button" id="schedule-button">Schedule</button></Link></li>
          <li><Link to="/punchcard"><button className="button" id="punch-card-button">PunchCard</button></Link></li>
          
          <img src="/navAssets/navflair.svg" className="navflair"/>
          <li><Link to="/profile"><button className="button" id="profile-button">Profile</button></Link></li>
          <img src="/navAssets/navbarRightPart.svg" className="navbarEnds"/>
          
        </ul>
            
      </div>
    );
}
  
export default NavBar;