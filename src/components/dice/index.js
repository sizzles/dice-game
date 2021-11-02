import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import './dice.css'

export const Dice = (props) => {
    
    return (
        <div className="Dice">
            <FontAwesomeIcon icon={MapRollToDiceIcon(props.lastRoll)} ></FontAwesomeIcon>
        </div>
    )
}

export const MapRollToDiceIcon = (roll) => {
    switch(roll) {
        case 1: 
            return faDiceOne;
        case 2:
            return faDiceTwo;
        case 3: 
            return faDiceThree;
        case 4:
            return faDiceFour;
        case 5:
            return faDiceFive;
        case 6: 
            return faDiceSix;
        default:
            return faDice; //Handles anyother values by showing default dice symbol
    }
}