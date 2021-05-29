import { TOTAL_TIME } from '../reducers/clockReducer';

const sendTimeAction = (time) => ({
  type: TOTAL_TIME,
  payload: time,
});

export default sendTimeAction;
