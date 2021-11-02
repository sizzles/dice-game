import React, { useState } from 'react';
import { ScoreCounter } from '../score_counter';
import { Dice } from '../dice';
import './player.css'

export const Player = (props) => {
    return (
        <div className="Player">
            {props.playerName}
            <Dice lastRoll = {props.playerLastRoll}></Dice>
            <ScoreCounter score = {props.playerWins}></ScoreCounter>
        </div>
    )
}