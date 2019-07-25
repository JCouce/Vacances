import React, {Component} from 'react';
import './landing.css';
import { Link } from 'react-router-dom'

class Landing extends Component {
  render () {
    return (
      <div className="landing-wrapper">
        <div className="aside-left">
          <Link to={'/dashboard'} className="circle">
            <i className="arrow right" />
          </Link>
          <h1>
            Reserva tus vacaciones
          </h1>
          <p>
            Para comenzar tan solo tienes que pulsar el boton y continuar a la siguiente pantalla
          </p>
        </div>
        <div className="aside-right">
        </div>
      </div>
    );
  }
}

export default Landing;
