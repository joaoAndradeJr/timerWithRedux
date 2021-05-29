import React, { Component } from 'react';
import DisplayTime from './DisplayTime';
import Buttons from './Buttons';

class Timer extends Component {
  render() {
    return (
      <div>
        <DisplayTime />
        <Buttons />
      </div>
    );
  }
}

export default Timer;
