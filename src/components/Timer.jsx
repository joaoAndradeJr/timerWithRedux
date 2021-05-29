import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayTime from './DisplayTime';
import Buttons from './Buttons';
import convertSeconds from '../services/convertSeconds';

class Timer extends Component {

  renderTimes() {
    const { total, remain } = this.props;
    return (
      <>
        <h3>
          Tempo total: { total }
        </h3>
        <h3>
          Tempo restante: { convertSeconds(remain) }
        </h3>
      </>
    );
  }
  render() {
    const { remain } = this.props;
    return (
      <div>
        <DisplayTime remain={ remain } />
        <Buttons />
        { this.renderTimes() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.clockReducer.time,
  remain: state.clockReducer.remainTime,
});

export default connect(mapStateToProps)(Timer);
