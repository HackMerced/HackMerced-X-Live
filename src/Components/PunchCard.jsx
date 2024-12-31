import React from 'react';
import './CSS/PunchCard.css'


function PunchCard() {
    return (
      <div className="PunchCard">
        <div className='punch-header'>
          <h1>HackMerced X PunchCard Page</h1>
        </div>
        <div className='punch-body'>
          <div className='container-parent'>
            <div className='container-child'>
              <div className="container-child-content">
                <table id="punches" className="rounded-table no-color">
                  <tr>
                    <td className="title">Breakfast</td>
                    <td><div className="punch true"></div></td>
                    <td><div className="punch false"/></td>
                    <td><div className="punch false"/></td>
                    <td className="spacer"></td>
                  </tr>
                  <tr>
                    <td className="title">Lunch</td>
                    <td><div className="punch true"></div></td>
                    <td><div className="punch true"></div></td>
                    <td><div className="punch false"/></td>
                    <td className="spacer"></td>
                  </tr>
                  <tr>
                    <td className="title">Dinner</td>
                    <td><div className="punch true"></div></td>
                    <td><div className="punch true"></div></td>
                    <td><div className="punch false"/></td>
                    <td className="spacer"></td>
                  </tr>
                  </table>
                  <center className='punch-inst'>
                    <p>Your card is automatically punched when you scan at a punch station.</p>
                  </center>
                <br/>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
    );
  }
  
  export default PunchCard;