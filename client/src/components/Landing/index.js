import React, {Component} from 'react';
import './landing.css';

class Landing extends Component {
  render () {
    return (
      <div className="landing-wrapper">
        <div className="aside-left">
          <a className="circle" href="/dashboard">
            <i class="arrow right" />
          </a>
          <h1>
            Reserva tus vacaciones
          </h1>
          <p>
            Para comenzar tan solo tienes que pulsar el boton y continuar a la siguiente pantalla
          </p>
        </div>
        <div className="aside-right">
          {/* <img src="http://www.metahosp.com/wp-content/uploads/2014/07/summer-holidays-500x240.jpg" alt="summer"/> */}
        </div>
      </div>
    );
  }
}

export default Landing;
