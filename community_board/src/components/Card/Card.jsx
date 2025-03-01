import React from 'react';
import './Card.css';
import Button from '../Button/Button.jsx';

const Card = ({ title, description, imageUrl, linkUrl }) => {
    const handleClick = () => {
        window.open(linkUrl, '_blank');
      };

    return (
        <div className='card'>
            <div className='card-title'>{title}</div>
            <div className='card-description'>{description}</div>
            <img src={imageUrl} className='card-image'/>
            <div className='card-footer'>
                <Button onClick={handleClick}>Read More</Button>
            </div>
        </div>
    )
}


export default Card;