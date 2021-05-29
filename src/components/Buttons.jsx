import React from 'react';
import { connect } from 'react-redux';
import sendTimeAction from '../actions/sendTime';

class Buttons extends React.Component {

  handleClick(time) {
    const { sendTime } = this.props;
    sendTime(time);
  }

  renderButtons() {
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
      </section>
    );
  }

  render() {
    return (
      <section>
        { this.renderButtons() }
      </section>
    );
  }
}

const mapDispatchToProps= (dispatch) => ({
  sendTime: (time) => dispatch(sendTimeAction(time)),
});

export default connect(null, mapDispatchToProps)(Buttons);
