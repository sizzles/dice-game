import React from 'react';
import './footer.css'

export const Footer = () => {
    let envLevel = process.env.REACT_APP_ENV_LVL;
    return (
        <div className="Footer">{envLevel}</div>
    )
}