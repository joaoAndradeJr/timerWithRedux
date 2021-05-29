import React, { Component } from 'react';

class DisplayTime extends Component {

  convertSeconds() {
    const { remain } = this.props;
    const minutes = Math.floor(remain / 60);
    const seconds = remain % 60;
    return minutes + ':' + seconds;
  }
  renderTimerDisplay() {
    return (
      <div>
        {this.convertSeconds()}
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
