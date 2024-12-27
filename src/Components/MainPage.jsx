import React from 'react';
import './CSS/MainPage.css'

function MainPage() {
    return (
      <div className="MainPage">
        <div className="main-page-contian-panels">
          <div className="main-page-announcment-panel">
            <h1>Accouncments</h1>
          </div>
          <div className="main-page-countdown-panel">
              <h1>COMPLETE HACKING IN:</h1>
              <h1>00:00:00</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainPage;