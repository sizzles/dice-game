import React, { useState } from 'react';

export const ScoreCounter = (props) => {
    
    let scoreMessage = "Wins: " + props.score;

    return (
        <div>
            {scoreMessage}
        </div>
    )
}