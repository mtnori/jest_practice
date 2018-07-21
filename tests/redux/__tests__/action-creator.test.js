import * as actionCreators from '../ActionCreators';
import * as types from '../ActionTypes';

describe('ActionCreatorsのテスト', () => {
  it('increment(number)', () => {
    expect(actionCreators.increment(100)).toEqual({
      type: types.INCREMENT,
      amount: 100
    });
  });

  it('fetch()', () => {
    expect(actionCreators.fetch()).toEqual({
      type: types.FETCH
    });
  });

  it('fetchSuccess(payload)', () => {
    const payload = [{ id: 1 }, { id: 2 }];
    expect(actionCreators.fetchSuccess(payload)).toEqual({
      type: types.FETCH_SUCCESS,
      payload
    });
  });

  it('fetchFailure(error)', () => {
    const error = { message: 'エラー' };
    expect(actionCreators.fetchFailure(error)).toEqual({
      type: types.FETCH_FAILURE,
      error
    });
  });
});
