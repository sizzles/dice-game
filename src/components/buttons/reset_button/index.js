import React from 'react';

export const ResetButton  = (props) => {
    return (
        <div>
            <button className="GameButton" onClick={props.resetScore} data-testid="resetButton" >Reset</button>
        </div>
    )
}