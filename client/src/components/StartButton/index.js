import React, {Component} from 'react';
import './startButton.scss'

class StartButton extends Component {
  render () {
    return (
      <div class="button-container">
        <a href="/dashboard" class="button">
          Start
        </a>
      </div>
    );
  }
}

export default StartButton;
