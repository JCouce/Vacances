import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../Card';
import './dashboard.css';
import { fetchMonths } from '../../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMonths();

  }
  renderContent () {
    switch (this.props.auth) {
      case null:
        return <h2>Loading</h2>;
      case false:
        return <h2>Not logged</h2>;
      default:
        return this.renderMonths ();
    }
  }
  renderMonths () {
    let months = this.props.months;
    return months.map ((month, index) => {
      let randomImg ='https://picsum.photos/id/' + ((index*10)+2) +'/400/400';
      return <Card img={randomImg} name={month.name} monthId={month.monthId} key={month.monthId} />;
    });
  }
  render () {
    return (
      <div className="month-wrapper">
        {this.renderContent ()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    months: state.months
  };
}

export default connect (mapStateToProps, {fetchMonths}) (Dashboard);
