import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './CSS/Hamburger.css';

const Hamburger = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else
        {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '100%'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
    
            <div className={menu_class}>
                <div className="menu-buttons">
                    <ul>
                        <li><Link to="/prizes"><button className="button" id="about-us-button">Prizes</button></Link></li> 
                        <li><Link to="/schedule"><button className="button" id="schedule-button">Schedule</button></Link></li> 
                        <li><Link to="/punchcard"><button className="button" id="punch-card-button">PunchCard</button></Link></li>
                        <li><Link to="/profile"><button className="button" id="profile-button-link">Profile Settings</button></Link></li> 
                        <li><Link to="/login"><button className="button" id="log-out-button">Log Out</button></Link></li>  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;