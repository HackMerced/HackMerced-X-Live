import React from 'react';
import './CSS/Prizes.css'
import PrizeListing from './PrizeListing'

function Prizes() {
  let points = 129
  let prizeArray = [ // test data
    {
      title: "Boogie Board",
      description: "Take it to the lake!", // is this contents in the db?
      cost: "120",
      quantity: "3",
      id: 6532 // should i use this as react key or is index okay
    },
    {
      title: "Car", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2"
    },
    {
      title: "test1", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2"
    },
    {
      title: "test2", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2"
    },
    {
      title: "test3", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2"
    },
    {
      title: "test4", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2"
    },
    {
      title: "test5", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2"
    },
  ]
  return (
    <div className="Prizes">
      <div className="prizes-points" align="center">
        <p>Points: {points}</p>
      </div>
      <div className="prizes-listingcontainer">
        <div className="prizes-header">
          {/* <div>&nbsp;</div> */}
          <div>Prize</div>
          <div>Description</div>
          <div>Cost</div>
          <div>Quantity</div>
          <div>Claim</div>
        </div>
        <div className="prizes-table">
          {prizeArray.map(item => {
            return <PrizeListing key={prizeArray.indexOf(item)} name={item.title} description={item.description} cost={item.cost} quantity={item.quantity} />
          })}
        </div>
      </div>
    </div>
  );
}
  
export default Prizes;