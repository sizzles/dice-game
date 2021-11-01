import React, { useState } from 'react';

export const ResetButton  = (props) => {
    return (
        <div>
            <button className="GameButton" onClick={props.resetScore} >Reset</button>
        </div>
    )
}