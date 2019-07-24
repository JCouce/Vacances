import React, { Component } from 'react';

class Day extends Component {
    render() {
        return (
            <div
            className={this.props.blank ? 'blank' : 'day'}
          //   onClick={() => setSelected (selected?false:true)}
            onClick = {()=> this.props.handler(this.props.number)}
          >
            {this.props.number}
          </div>
        );
    }
}

export default Day;
