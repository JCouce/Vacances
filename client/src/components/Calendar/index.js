import React, {Component} from 'react';
import { fetchDays, fetchMonthInfo } from '../../actions/index';
import {connect} from 'react-redux';
import Day from '../Day/';
import './calendar.css';
import CalendarControl from '../CalendarControl';
class Calendar extends Component {
  componentDidMount () {
    this.props.fetchDays (this.props.match.params.id);
    this.props.fetchMonthInfo(this.props.match.params.id);
  }

  handler (someValue) {
    this.setState({
      someVar: someValue
    })
  }

  renderDays () {
    let startingDay = this.props.monthInfo.startingDay;
    let daysArray = [];
    var days = this.props.days;

    days.sort (function (a, b) {
      return a.dayId - b.dayId;
    });
    daysArray = days.map (day => {
      return <Day selected={day.dayId%2===0?true:false} number={day.dayId} key={'day' + day.dayId} />;
    });

    for (let i = 0; i < startingDay; i++) {
      daysArray.unshift (<Day blank={true} key={'blank' + i} />);
    }

    return daysArray;
  }
  render () {
    return (
      <div>
        <CalendarControl monthId={this.props.match.params.id} />
        <div className="calendar-title">{this.props.monthInfo.name?this.props.monthInfo.name.toUpperCase():''}</div>
        <ul className="day-names-wrapper">
          <li className="day-name mon">Lunes</li>
          <li className="day-name tue">Martes</li>
          <li className="day-name wed">Miercoles</li>
          <li className="day-name thu">Jueves</li>
          <li className="day-name fri">Viernes</li>
          <li className="day-name sat">Sabado</li>
          <li className="day-name sun">Domingo</li>
        </ul>
        <div className="calendar-wrapper">
          {this.renderDays ()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    days: state.days,
    monthInfo: state.monthInfo
  };
};
export default connect (mapStateToProps, {fetchDays, fetchMonthInfo}) (Calendar);
