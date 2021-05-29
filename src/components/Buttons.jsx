import React from 'react';
import { connect } from 'react-redux';
import { sendTimeAction, resetTimeAction } from '../actions/sendTime';

class Buttons extends React.Component {

  handleClick(time) {
    const { sendTime, resetTime } = this.props;
    if (time === 0 ) resetTime();
    sendTime(time);
  }

  renderButtons() {
    const resetTime = 0;
    const halfMinute = 30;
    const threeMinutes = 180;
    const fiveMinutes = 300;
    const tenMinutes = 600;
    return (
      <section>
        <button type="button" value={halfMinute} onClick={() => this.handleClick(halfMinute)}>
          + 30 seconds
        </button>
        <button type="button" value={threeMinutes} onClick={() => this.handleClick(threeMinutes)}>
          03:00
        </button>
        <button type="button" value={fiveMinutes} onClick={() => this.handleClick(fiveMinutes)}>
          05:00
        </button>
        <button type="button" value={tenMinutes} onClick={() => this.handleClick(tenMinutes)}>
          10:00
        </button>
        <button type="button" id="start" onClick={ () => this.start() }>Iniciar</button>
        <button type="button" id="reset" onClick={ () => this.handleClick(resetTime) }>Zerar</button>
      </section>
    );
  }
  render() {
    return (
      <>
        { this.renderButtons() }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.clockReducer.totalTime,
});

const mapDispatchToProps = (dispatch) => ({
  sendTime: (time) => dispatch(sendTimeAction(time)),
  resetTime: () => dispatch(resetTimeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
