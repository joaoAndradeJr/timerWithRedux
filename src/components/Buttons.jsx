import React from 'react';
import { connect } from 'react-redux';
import sendTimeAction from '../actions/sendTime';

class Buttons extends React.Component {

  onClick(value) {
    const { sendTime } = this.props;
    sendTime(value);
  }

  renderButtons() {
    const halfMinute = 30;
    const threeMinutes = 180;
    const fiveMinutes = 300;
    const tenMinutes = 600;
    return (
      <section>
        <button type="button" value={halfMinute} onClick={() => this.onClick(halfMinute)}>
          + 30 seconds
        </button>
        <button type="button" value={threeMinutes} onClick={() => this.onClick(threeMinutes)}>
          03:00
        </button>
        <button type="button" value={fiveMinutes} onClick={() => this.onClick(fiveMinutes)}>
          05:00
        </button>
        <button type="button" value={tenMinutes} onClick={() => this.onClick(tenMinutes)}>
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
