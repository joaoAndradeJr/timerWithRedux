export const TOTAL_TIME = 'TOTAL_TIME';
export const REMAIN_TIME = 'REMAIN_TIME';

const INITIAL_STATE = {
  totalTime: '80',
  remainTime: '80',
};

export function clockReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOTAL_TIME:
    return {
      totalTime: action.payload.totalTime,
      remainTime: action.payload.remainTime,
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
