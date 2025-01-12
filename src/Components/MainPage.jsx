import React, { useState } from 'react';
import './CSS/MainPage.css'

function MainPage() {
    const [expanded, setExpanded] = useState(false);

    // Toggle the width expansion on click
    const handleClick = () => {
      setExpanded(!expanded);
    };
    return (
      <div className="MainPage">

        <div className="main-page-contian-panels">
          <div className="main-page-countdown-panel">
              {/* <img src="/mainAssets/Countdown-Background.svg" alt="CountDown Panel Background" className="panel-background countdown-background" /> */}
              {/* <img src="/mainAssets/ClockPanel.png" alt="CountDown Panel Background" className="panel-background countdown-background" /> */}
              <img src="/mainAssets/PurpleClockPanel.png" alt="CountDown Panel Background" className="panel-background countdown-background" />

              <img src="/mainAssets/purple.png" alt="Purple Panel Background" className="purlple-medium-panel" />
              <img src="/mainAssets/darkpurple.png" alt="Pink Panel Background" className="darkpurlple-small-panel" />
              <div className="panel-text">
                <h2>COMPLETE HACKING IN:</h2>
                <h1 className='countdown-timer'>00:00:00</h1>
              </div>
          </div>

          <div className="main-page-announcment-panel">
            {/* <img src="/mainAssets/Prize-Screen.svg" alt="Announcement Panel Background" className="panel-background announcment-desktop" /> */}
            {/* <img src="/mainAssets/Announcment-Mobile-Ver.svg" alt="Announcement Panel Background" className="panel-background announcment-mobile" /> */}
            <img src="/mainAssets/AnnouncementPanelBetter.png" alt="Announcement Panel Background" className="panel-background announcment-desktop" />
            
            <img src="/mainAssets/SchedulePanelMobile.png" alt="Announcement Panel Background" className="panel-background announcment-mobile" />
            

            <div className="panel-text annountment-panel-text">
                <h1>ANNOUNCMENTS</h1>
                <div className="contain-announcments">
                  <section className="scroll-reveal">
                    <h3><span>Snacks available at COB2 105 please come before all of the food is gone</span></h3>
                    <h3><span>Snacks available at COB2 105Snacks available at COB2 105 please come before all of the food is gone please come before all of the food is gone</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105</span></h3>
                    <h3><span>Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105Snacks available at COB2 105</span></h3>

                    <h3><span>.</span></h3>
                    <h3><span>.</span></h3> {/* these are here to get the color to spread all the way */}
                  </section>
                </div>
            </div>
          </div>

        </div>

        <img
          src="/mainAssets/HackMerced-Tower.png"
          alt="HackMerced Tower"
          className={`MainPage-hackmerced-tower ${expanded ? 'expanded' : ''}`}
          onClick={handleClick}
        />
      </div>
    );
  }
  
  export default MainPage;