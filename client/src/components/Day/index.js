import React, {useState} from 'react';
import './day.css';

const Day = props => {
  const onDayClickHandler = () => {
    props.click(props.number)
    setSelected (selected ? false : true);
  }
  const [selected, setSelected] = useState (props.selected?true:false);
  return (
    <div
      className={[
        props.blank ? 'blank' : 'day',
        selected ? 'selected' : '',
      ].join (' ')}
      onClick={onDayClickHandler}
    >
      {props.number}
    </div>
  );
};

export default Day;
