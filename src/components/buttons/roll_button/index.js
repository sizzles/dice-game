import React, { useState } from 'react';
import '../buttons.css'

export const RollButton  = (props) => {
    return (
        <div>
            <button className="GameButton" onClick={props.rollDice} >Roll Dice</button>
        </div>
    )
}