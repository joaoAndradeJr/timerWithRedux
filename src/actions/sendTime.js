import { TOTAL_TIME, REMAIN_TIME, RESET_TIME } from '../reducers/clockReducer';

export const sendTimeAction = (time) => ({
  type: TOTAL_TIME,
  payload: {
    time,
  },
});

export const sendRemainTimeAction = (time) => ({
  type: REMAIN_TIME,
  payload: {
    time,
  }
});

export const resetTimeAction = () => ({
  type: RESET_TIME,
});
