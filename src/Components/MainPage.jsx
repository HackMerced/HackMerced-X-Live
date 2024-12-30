import React from 'react';
import './CSS/MainPage.css'

function MainPage() {
    return (
      <div className="MainPage">

        <div className="main-page-contian-panels">
          <div className="main-page-countdown-panel">
              <img src="/mainAssets/Countdown-Background.svg" alt="CountDown Panel Background" className="panel-background countdown-background" />
              <img src="/mainAssets/purple.svg" alt="Purple Panel Background" className="purlple-medium-panel" />
              <img src="/mainAssets/darkpurple.svg" alt="Pink Panel Background" className="darkpurlple-small-panel" />
              <div className="panel-text">
                <h2>COMPLETE HACKING IN:</h2>
                <h1 className='countdown-timer'>00:00:00</h1>
              </div>
          </div>

          <div className="main-page-announcment-panel">
            <img src="/mainAssets/Prize-Screen.svg" alt="Announcement Panel Background" className="panel-background announcment-desktop" />
            <img src="/mainAssets/Announcment-Mobile-Ver.svg" alt="Announcement Panel Background" className="panel-background announcment-mobile" />
            <div className="panel-text annountment-panel-text">
                <h1>ANNOUNCMENTS</h1>
                <div className="contain-announcments">
                  <h3>Snacks available at COB2 105 please come before all of the food is gone</h3>
                  <h3>Snacks available at COB2 105Snacks available at COB2 105 please come before all of the food is goneSnacks available at COB2 105 please come before all of the food is gone</h3>
                  <h3>Snacks available at COB2 105</h3>
                  <h3>Snacks available at COB2 105</h3>
                  <h3>Snacks available at COB2 105</h3>
                  <h3>Snacks available at COB2 105</h3>
                </div>
            </div>
          </div>

        </div>

        <img src="/mainAssets/HackMerced-Tower.svg" alt="HackMerced Tower" className="MainPage-hackmerced-tower" />
        
      </div>
    );
  }
  
  export default MainPage;