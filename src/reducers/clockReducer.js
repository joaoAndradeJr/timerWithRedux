export const TOTAL_TIME = 'TOTAL_TIME';
export const REMAIN_TIME = 'REMAIN_TIME';
export const RESET_TIME = 'RESET_TIME';

const INITIAL_STATE = {
  totalTime: 0,
  remainTime: 0,
};

export const clockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_TIME:
    return {
      totalTime: state.totalTime + action.payload.time,
      remainTime: state.remainTime + action.payload.time,
    };
  case REMAIN_TIME:
    return {
      ...state,
      remainTime: action.payload.remainTime,
    };
  case RESET_TIME:
    return INITIAL_STATE;
  default:
    return state;
  }
}
