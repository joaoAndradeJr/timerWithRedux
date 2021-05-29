import React, { Component } from 'react';
import { connect } from 'react-redux';
import convertSeconds from '../services/convertSeconds';

class DisplayTime extends Component {
  render() {
    const { total, remain } = this.props;
    return (
      <div>
        <section>
          { convertSeconds(total) }
        </section>
        <section>
          { convertSeconds(remain) }
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
