import React from "react";
import "./CSS/Prizes.css";
import PrizeListing from "./PrizeListing";
import NavBar from "./NavBar";

function Prizes() {
  let points = 129;
  let prizeArray = [
    // test data
    {
      title: "Boogie Board",
      description: "Take it to the lake!", // is this contents in the db?
      cost: "120",
      quantity: "3",
      id: 6532, // should i use this as react key or is index okay
    },
    {
      title: "Car", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2",
    },
    {
      title: "test1", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2",
    },
    {
      title: "test2", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2",
    },
    {
      title: "test3", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2",
    },
    {
      title: "test4", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2",
    },
    {
      title: "test5", // hopefully these aren't too long and they wont break
      description: "Take it to the road!",
      cost: "400",
      quantity: "2",
    },
  ];
  return (
    <>
    <NavBar />
    <div className="prizes-container">
      <div className="prizes-points" align="center">
        Points: {points}
      </div>

      <div className="prizes-header">
        <div className="prizes-header-title">Prize</div>
        <div className="prizes-header-title">Description</div>
        <div className="prizes-header-title">Cost</div>
        <div className="prizes-header-title">Quantity</div>
        <div className="prizes-header-title">Claim</div>
      </div>

      <div className="prizes-table">
        {prizeArray.map((item) => {
          return (
            <PrizeListing
              key={prizeArray.indexOf(item)}
              name={item.title}
              description={item.description}
              cost={item.cost}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Prizes;
