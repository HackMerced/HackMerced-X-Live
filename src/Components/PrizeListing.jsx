import React from 'react'

function claimPrize(name) {
    // badger api pls
}
/* notes:
    - 
*/

function PrizeListing({name, description, cost, quantity}) {
    return (
        <div className="prize">
            <div className="prize-text">
                <div className="prize-name">{name}</div>
                <div className="prize-desc">{description}</div>
                <div className="prize-cost">{cost} points</div>
                <div className="prize-quantity">{quantity} remaining</div>
                <div><button className='prizes-claim' style={{dispaly:"inline-block"}} onClick={() => claimPrize(name)}>Claim</button></div>
                {/* <img src="prizeAssets/row.png" /> */}
            </div>
        </div>
    );
}

export default PrizeListing;