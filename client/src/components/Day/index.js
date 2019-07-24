import React from 'react';
import './day.css'

const Day = (props) => {
    return (
        <div className="day">
            {props.number}
        </div>
    );
}

export default Day;
