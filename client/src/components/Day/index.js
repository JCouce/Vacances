import React, {useState} from 'react';
import './day.css';

const Day = props => {
  const onDayClickHandler = () => {
    props.click (props.number);
    setSelected (selected ? false : true);
  };
  const onDayHoverHandler = () => {
    setHovered (true);
  };
  const onDayMouseLeaveHandler = () => {
    setHovered (false);
  };

  const [selected, setSelected] = useState (props.selected ? true : false);
  const [hovered, setHovered] = useState (false);
  return (
    <div
      className={[
        props.blank ? 'blank' : 'day',
        selected ? 'selected' : '',
        props.requested ? 'requested' : '',
        props.status,
      ].join (' ')}
      onClick={onDayClickHandler}
      onMouseEnter={onDayHoverHandler}
      onMouseLeave={onDayMouseLeaveHandler}
    >
      <h2 className="dayNumber">
        {hovered && props.status ? props.status.toUpperCase () : props.number}
      </h2>
    </div>
  );
};

export default Day;
