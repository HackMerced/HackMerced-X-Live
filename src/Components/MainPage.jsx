import React from 'react';
import './CSS/MainPage.css'

function MainPage() {
    return (
      <div className="MainPage">
        <img src="/mainAssets/HackMerced-Tower.svg" alt="" className="hackmerced-tower" />
        <div className="main-page-contian-panels">
          <div className="main-page-countdown-panel">
              <img src="/mainAssets/Countdown-Background.svg" alt="" className="panel-background" />
              <img src="/mainAssets/purple.svg" alt="" className="purlple-medium-panel" />
              <img src="/mainAssets/darkpurple.svg" alt="" className="darkpurlple-small-panel" />
              <div className="panel-text">
                <h1>COMPLETE HACKING IN:</h1>
                <h1>00:00:00</h1>
              </div>
          </div>
          <div className="main-page-announcment-panel">
            <img src="/mainAssets/Prize-Screen.svg" alt="" className="panel-background" />
            <div className="panel-text">
                <h1>ANNOUNCMENTS</h1>
                <div className="contain-announcments">
                  <p>Snacks available at COB2 105</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainPage;