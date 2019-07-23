import React from 'react';
import './card.css'


const Card = (props) => {
    
    return (
        <div style={{backgroundImage: 'url(' + props.img + ')'}} className="card">
            <h1>{props.name.toUpperCase()}</h1>
        </div>
    );
}

export default Card;
