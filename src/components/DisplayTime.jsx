import React, { Component } from 'react';
import convertSeconds from '../services/convertSeconds';
class DisplayTime extends Component {
  render() {
    const { remain } = this.props;
    return (
      <div>
        { convertSeconds(remain) }
      </div>
    );
  }
}

export default DisplayTime;
