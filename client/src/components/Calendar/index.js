import React, {Component} from 'react';
import { fetchDays, fetchMonthInfo, fetchRequests } from '../../actions/index';
import {connect} from 'react-redux';
import Day from '../Day/';
import './calendar.css';
import CalendarControl from '../CalendarControl';
class Calendar extends Component {
  state = {
    daySelected: [],
  };
  async componentDidMount () {
    await this.props.fetchRequests(this.props.match.params.id);
    await this.props.fetchMonthInfo (this.props.match.params.id);
    await this.props.fetchDays (this.props.match.params.id);
  }

  onDayClcikHandler = newDay => {
    var dayArray = [...this.state.daySelected];

    if (dayArray.includes (newDay)) {
      var index = dayArray.indexOf (newDay);
      if (index >= 0) {
        dayArray.splice (index, 1);
      }
      this.setState ({
        daySelected: dayArray
      });
    } else {
      this.setState ({
        daySelected: [...this.state.daySelected, newDay],
      });
    }
  };
  renderDays = () => {
    let startingDay = this.props.monthInfo.startingDay;
    let daysArray = [];
    var days = [...this.props.days];
    var requests = [...this.props.requests];
    //Sort days descending
    days.sort (function (a, b) {
      return a.dayId - b.dayId;
    });
    //Mark the requested days with the param "requested"
    days.forEach(e => {
     let found = requests.find((r)=>{
        return r.dayId === e.dayId;
      })
      e.requested = found || {};
    })
    //Map the components
    daysArray = days.map (day => {
      var requested = day.requested.status?true:false;
      return (
        <Day
          selected={requested}
          click={this.onDayClcikHandler}
          number={day.dayId}
          key={'day' + day.dayId}
        />
      );
    });

    for (let i = 0; i < startingDay; i++) {
      daysArray.unshift (<Day blank={true} key={'blank' + i} />);
    }

    return daysArray;
  }
  render () {
    if (this.props.days.length < 1) {
      return (
        <h1>LOADING</h1>
      )
    }
    console.log(this.props);
    return (
      <div>
        <CalendarControl monthId={this.props.match.params.id} />
        <div className="calendar-title">
          {this.props.monthInfo.name
            ? this.props.monthInfo.name.toUpperCase ()
            : ''}
        </div>
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
    monthInfo: state.monthInfo,
    requests: state.requests
  };
};
export default connect (mapStateToProps, {fetchDays, fetchMonthInfo, fetchRequests}) (
  Calendar
);
