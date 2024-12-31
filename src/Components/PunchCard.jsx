import React from 'react';
import './CSS/PunchCard.css'


function PunchCard() {
    return (
      <div className="PunchCard">
        <h1>HackMerced X PunchCard Page</h1>
        <div className='punch-body'>
          <div className='container-parent'>
            <div className='container-child'>
              <div class="container-child-content">
                <table id="punches" class="rounded-table no-color">
                  <tr>
                    <td class="title">Breakfast</td>
                    <td><div class="punch true"></div></td>
                    <td><div class="punch false"/></td>
                    <td><div class="punch false"/></td>
                    <td class="spacer"></td>
                  </tr>
                  <tr>
                    <td class="title">Lunch</td>
                    <td><div class="punch true"></div></td>
                    <td><div class="punch true"></div></td>
                    <td><div class="punch false"/></td>
                    <td class="spacer"></td>
                  </tr>
                  <tr>
                    <td class="title">Dinner</td>
                    <td><div class="punch true"></div></td>
                    <td><div class="punch true"></div></td>
                    <td><div class="punch false"/></td>
                    <td class="spacer"></td>
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