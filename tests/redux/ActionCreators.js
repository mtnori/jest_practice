import * as types from './ActionTypes';

export function increment(amount) {
  return {
    type: types.INCREMENT,
    amount
  };
}

export function fetch() {
  return {
    type: types.FETCH
  };
}

export function fetchSuccess(payload) {
  return {
    type: types.FETCH_SUCCESS,
    payload
  };
}

export function fetchFailure(error) {
  return {
    type: types.FETCH_FAILURE,
    error
  };
}
