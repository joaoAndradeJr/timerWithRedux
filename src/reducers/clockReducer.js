export const TOTAL_TIME = 'TOTAL_TIME';
export const REMAIN_TIME = 'REMAIN_TIME';

const INITIAL_STATE = {
  totalTime: 0,
  remainTime: 0,
};

export function clockReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOTAL_TIME:
    return {
      ...state,
      totalTime: action.payload.time,
    };
  case REMAIN_TIME:
    return {
      ...state,
      remainTime: action.payload.remainTime,
    };
  default:
    return state;
  }
}
