import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './app.css';

import Header from './Header/';
import Landing from './Landing/';
import Dashboard from './Dashboard/index';
import Calendar from './Calendar/';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/month/:id" component={Calendar} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App)
