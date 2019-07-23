import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../Card';
import './dashboard.css';

class Dashboard extends Component {
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
    let months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    return months.map ((month, index) => {
      let randomImg ='https://picsum.photos/id/' + ((index*10)+2) +'/400/400';
      return <Card img={randomImg} name={month} key={month.charAt (0)} />;
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
function mapStateToProps({auth}) {
  return {auth};
}

export default connect (mapStateToProps) (Dashboard);
