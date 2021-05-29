import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayTime from './DisplayTime';

class Timer extends Component {

  renderTimes() {
    const { total, remain } = this.props;
    return (
      <>
        <h3>
          Tempo total: { total === '0' ? 'Tempo não selecionado' : total }
        </h3>
        <h3>
          Tempo restante: { total === '0' ? 'Tempo não selecionado' : remain }
        </h3>
      </>
    );
  }
  render() {
    const { remain } = this.props;
    return (
      <div>
        <DisplayTime remain={ remain } />
        { this.renderTimes() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.clockReducer.totalTime,
  remain: state.clockReducer.remainTime,
});

export default connect(mapStateToProps)(Timer);
