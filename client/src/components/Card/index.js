import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';


const Card = (props) => {
    
    return (
        <Link to={'/month/' + props.monthId} style={{backgroundImage: 'url(' + props.img + ')'}} className="card">
            <h1>{props.name.toUpperCase()}</h1>
        </Link>
    );
}

export default Card;
