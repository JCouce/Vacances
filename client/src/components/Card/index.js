import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';


const Card = (props) => {
    
    return (
        //TODO: Find the way to use LINK instead of anchor and dont mix the props between months
        <a href={'/month/' + props.monthId} style={{backgroundImage: 'url(' + props.img + ')'}} className="card">
            <h1>{props.name.toUpperCase()}</h1>
        </a>
    );
}

export default Card;
