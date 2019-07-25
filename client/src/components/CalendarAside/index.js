import React from 'react';
import './CalendarAside.css'

const CalendarAside = (props) => {
    return (
        <div className={['aside', props.asideStyle].join(' ')}>
            <h1>Aside title</h1>
            
        </div>
    );
}

export default CalendarAside;
