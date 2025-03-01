import React from 'react';
import './Button.css';

const Button = ({onClick}) => {
    return (
        <button className="card-button" onClick={onClick}>
            Read More
        </button>
    );
}

export default Button;