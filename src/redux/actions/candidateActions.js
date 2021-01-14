import { fetchCandidates } from '../../api';
import * as types from './actionTypes';

export const loadCandidatesSuccess = (candidates) => {
  return { type: types.LOAD_CANDIDATES_SUCCESS, payload: candidates };
};

export const loadCandidates = () => {
  return async (dispatch) => {
    try {
      const candidates = await fetchCandidates();
      dispatch(loadCandidatesSuccess(candidates));
    } catch (error) {
      console.log('[FETCHING CANDIDATES ERROR]: ', error);
    }
  };
};
