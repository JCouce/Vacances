import React, {Component} from 'react';
import {fetchDays} from '../../actions/index';
import {connect} from 'react-redux';
import Day from '../Day/';
import './calendar.css';
import CalendarControl from '../CalendarControl';
class Calendar extends Component {
  componentDidMount () {
    this.props.fetchDays (this.props.match.params.id);
  }
  renderDays () {
    var days = this.props.days;

    days.sort (function (a, b) {
      return a.dayId - b.dayId;
    });
    return days.map ((day, index) => {
      return (
        <Day
          className="day"
          number={day.dayId}
          name={day.name}
          key={'day' + day.dayId}
        />
      );
    });
  }
  render () {
      console.log('object');
      console.log(this.props)
    return (
      <div>
        <CalendarControl monthId={this.props.match.params.id} />
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
  };
};
export default connect (mapStateToProps, {fetchDays}) (Calendar);
