import React, { Component } from 'react';
import { connect } from 'react-redux';
import convertSeconds from '../services/convertSeconds';

class DisplayTime extends Component {
  render() {
    const { total, remain } = this.props;
    const totalTime = convertSeconds(total);
    const remainTime = convertSeconds(remain);
    return (
      <div>
        <section>
          <p>Tempo selecionado: { totalTime }</p>
        </section>
        <section>
          <p>Tempo restante: <strong>{ remainTime }</strong></p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.clockReducer.totalTime,
  remain: state.clockReducer.remainTime,
});

export default connect(mapStateToProps)(DisplayTime);
