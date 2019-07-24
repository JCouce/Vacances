import React from 'react';
import './calendarControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CalendarControl = (props) => {
  return (
    <div className="control-bar">
      <div className="control-wrapper">
        <a href={'/month/' + (+props.monthId === 1 ?+props.monthId-0:+props.monthId-1)} className="button before"><FontAwesomeIcon style={{'fontSize':'20px'}} icon={faArrowLeft} /></a>
        <Link to={'/dashboard'} className="button exit"><FontAwesomeIcon style={{'fontSize':'20px'}} icon={faCalendarAlt} /></Link>
        <a href={'/month/' + (+props.monthId > 11?+props.monthId+0:+props.monthId+1)} className="button next"><FontAwesomeIcon style={{'fontSize':'20px'}} icon={faArrowRight} /></a>
      </div>
    </div>
  );
};

export default CalendarControl;
