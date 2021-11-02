import React from 'react';
import './roll_outcome.css'

export const RollOutcome = (props) => {
    return (
        <div className="RollOutcome">
            {props.outcomeMessage}
        </div>
    )
}