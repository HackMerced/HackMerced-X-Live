import React from 'react';
import './CSS/Schedule.css'
import NavBar from './NavBar';


// Schedule + maps

function Schedule() {
    return (
      <>
      <NavBar />
      <div className="Schedule">
        
        <div className="hackmerced-tower">
          <img src="/scheduleAssets/HackMercedTower.png" className='hackmerced-tower-img' alt='HackMerced Tower'/>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Event Title</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>learn the basics of firebase.  Implement login, logout, and sign up capabilities.  Create a live update comment section using firestore.  All experiance levels welcome!</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <p><img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/></p>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>I Figma'd it out! Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Learn how to use figma to create designs!</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>FireBase WorkShop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>learn the basics of firebase.  Implement login, logout, and sign up capabilities.  Create a live update comment section using firestore.  All experiance levels welcome!</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Chat GPT From Scratch Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Learn to pretrain a LLM.  We will go over self attention, transformer architechure, cool matrix tricks and more.  All you need to know is basic python syntax! No experiance needed!</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Blender Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>
        
        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Blender Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Blender Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Blender Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Blender Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        <div className='event-card'>
          <img src="/scheduleAssets/SmallSchedulePanel.png" className='small-schedule-panel' alt='Schedule Panel'/>
          <img src="/scheduleAssets/SchedulePanel.png" className='schedule-panel' alt='Schedule Panel'/>
          <div className='event-content'>
            <div className='event-text'>
              <p className='event-title'><b>Blender Workshop</b></p>
              <p className='start-time'><b>Start: </b>10:00am</p>
              <p className='duration'><b>Duration: </b>1 hr</p>
              <p className='location'><b>Location: </b>COB2 130</p>
              <p className='contents'>Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5Make a 3d donut!  We will be following Blender Guru's tutorial.  Note that this workshop uses Blender 3.5</p>
              <p className='capacity'><b>Capacity: </b>20</p>
              <p className='reward'><b>Reward: </b>100 points</p>
            </div>
            <img src="/scheduleAssets/maps/COB2130.png" className='map' alt='COB2 130'/>
          </div>
        </div>

        
      </div>
      </>
    );
  }
  
  export default Schedule;