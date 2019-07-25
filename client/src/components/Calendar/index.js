import React, {Component} from 'react';
import {fetchDays, fetchMonthInfo, fetchRequests} from '../../actions/index';
import {connect} from 'react-redux';
import Day from '../Day/';
import './calendar.css';
import CalendarControl from '../CalendarControl';
import Spinner from '../Spinner';
import CalendarAside from '../CalendarAside';
class Calendar extends Component {
  state = {
    daySelected: [],
  };
  async componentDidMount () {
    //TODO:
    //Probably this information should be stored in the state
    //Whit this way we can use Link tags instead of anchor tags to improve reactivity
    await this.props.fetchRequests (this.props.match.params.id);
    await this.props.fetchMonthInfo (this.props.match.params.id);
    await this.props.fetchDays (this.props.match.params.id);
  }

  onDayClcikHandler = newDay => {
    var dayArray = [...this.state.daySelected];
    this.setState ({
      somethingSelected: true,
    });
    if (dayArray.includes (newDay)) {
      var index = dayArray.indexOf (newDay);
      if (index >= 0) {
        dayArray.splice (index, 1);
      }
      this.setState ({
        daySelected: dayArray,
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
    //adding the whole information of the hollidayRequest
    days.forEach (e => {
      let found = requests.find (r => {
        return r.dayId === e.dayId;
      });
      e.requested = found || {};
    });
    //Map the components whit all the info
    daysArray = days.map (day => {
      var requested = day.requested.status ? true : false;

      return (
        <Day
          status={day.requested.status}
          requested={requested}
          click={this.onDayClcikHandler}
          number={day.dayId}
          key={'day' + day.dayId}
        />
      );
    });
    //Add N days before to make the calendar shift to the starting day
    //Ex: Wednesday = 2 (monday and tuesday)
    for (let i = 0; i < startingDay; i++) {
      daysArray.unshift (<Day blank={true} key={'blank' + i} />);
    }

    return daysArray;
  };
  render () {
    if (this.props.days.length < 1) {
      return <Spinner />;
    }
    console.log (this.props);
    let gridStyle = this.state.somethingSelected
      ? {'gridTemplateColumns': '1fr 3fr'}
      : {'gridTemplateColumns': '0fr 3fr'};
    let asideStyle = this.state.somethingSelected
      ? ''
      : 'hidden';
    //TODO: swap betweeen inline style 1fr and hidden class on the aside
    return (
      <div className="component-wrapper" style={gridStyle}>
        <CalendarAside asideStyle={asideStyle} />
        <div className="calendar-view">
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    days: state.days,
    monthInfo: state.monthInfo,
    requests: state.requests,
  };
};
export default connect (mapStateToProps, {
  fetchDays,
  fetchMonthInfo,
  fetchRequests,
}) (Calendar);
