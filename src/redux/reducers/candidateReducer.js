import * as types from '../actions/actionTypes';
import initialState from './initialState';

const CandidateReducer = (state = initialState.candidates, action = {}) => {
  if (action.type === types.LOAD_CANDIDATES_SUCCESS) {
    return action.payload;
  } else {
    return state;
  }
};

export default CandidateReducer;
