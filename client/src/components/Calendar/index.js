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
  computeStartingDay () {
    //TODO I forgot that we need the starting day at every month
    // this is the same problem than with the month name
    // I hate this with all my soul
    switch (+this.props.match.params.id) {
      case 1:
        return 1;
      case 2:
        return 4;
      case 3:
        return 4;
      case 4:
        return 0;
      case 5:
        return 2;
      case 6:
        return 5;
      case 7:
        return 0;
      case 8:
        return 3;
      case 9:
        return 6;
      case 10:
        return 1;
      case 11:
        return 4;
      case 12:
        return 6;
      default:
        break;
    }
  }
  renderDays () {
    let startingDay = this.computeStartingDay();
    let daysArray = [];
    var days = this.props.days;

    days.sort (function (a, b) {
      return a.dayId - b.dayId;
    });
    daysArray = days.map ((day, index) => {
      return <Day className="day" number={day.dayId} key={'day' + day.dayId} />;
    });

    for (let i = 0; i < startingDay; i++) {
      daysArray.unshift (<Day className="day blank" key={'blank' + i}/>);
    }

    return daysArray;
  }
  render () {
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
