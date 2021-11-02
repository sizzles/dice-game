import React, { useState } from 'react';
import { RollEngine }  from '../roll_engine';
import { RollButton }  from '../buttons/roll_button'
import { ResetButton } from '../buttons/reset_button';
import { RollOutcome } from '../roll_outcome';
import { Player } from '../player';

import './game.css'

const START_SCORE = -1;

export default function Game(props) {
    const [playerLastRoll, setPlayerLastRoll] = useState(START_SCORE);
    const [npcLastRoll, setNpcLastRoll] = useState(START_SCORE);
    const [playerWins, setPlayerWins] = useState(0);
    const [npcWins, setNpcWins] = useState(0);
    const [rollOutcome, setRollOutcome] = useState("Let's Play!");

    const RollDice = () => {
        var playerRoll =  props.rollEngine.GetRoll();
        var npcRoll = props.rollEngine.GetRoll();
        
        //Draw
        if(playerRoll == npcRoll) {
            setRollOutcome("Draw!!!");
        }

        //Player Wins
        else if(playerRoll > npcRoll) {
            setRollOutcome("Player Wins!!!");
            setPlayerWins(playerWins + 1);
        }

        //Computer Wins
        else {
            setRollOutcome("Computer Wins!!!");
            setNpcWins(npcWins + 1);
        }

        setPlayerLastRoll(playerRoll);
        setNpcLastRoll(npcRoll);
    }

    const ResetScore = () => {
        setRollOutcome("Let's Play!");
        setPlayerLastRoll(START_SCORE);
        setNpcLastRoll(START_SCORE);
        setPlayerWins(0);
        setNpcWins(0);
    }

    return (
        <div className="Game" >
            <Player playerName = 'You' playerLastRoll = {playerLastRoll} playerWins = {playerWins}></Player>
            <div>
                <RollOutcome outcomeMessage= {rollOutcome}></RollOutcome>
                <RollButton rollDice ={RollDice}></RollButton>
                <ResetButton resetScore = {ResetScore}></ResetButton>
            </div>
            <Player playerName = 'Computer' playerLastRoll = {npcLastRoll} playerWins = {npcWins}></Player>
           
        </div>
    )
}