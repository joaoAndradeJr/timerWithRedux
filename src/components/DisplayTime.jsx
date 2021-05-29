import React, { Component } from 'react';
import convertSeconds from '../services/convertSeconds';
class DisplayTime extends Component {
  renderTimerDisplay() {
    const { remain } = this.props;
    return (
      <div>
        {convertSeconds(remain)}
      </div>
    );
  }
  render() {
    return (
      <div>
        { this.renderTimerDisplay() }
      </div>
    );
  }
}

export default DisplayTime;
