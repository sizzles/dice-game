import React from 'react';
import '../buttons.css'

export const RollButton  = (props) => {
    return (
        <div>
            <button className="GameButton" onClick={props.rollDice} data-testid="rollButton" >Roll Dice</button>
        </div>
    )
}