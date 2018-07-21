import ActionDispatcher from '../ActionDispatcher';
// import * as types from '../ActionTypes';
import * as API from '../API';
import * as actionCreators from '../ActionCreators';

// APIをモック化
jest.mock('../API');
// ActionCreatorをモック化
jest.mock('../ActionCreators');

describe('ActionDispatcherのテスト', () => {
  beforeEach(() => {
    actionCreators.increment.mockClear();
    actionCreators.fetch.mockClear();
    actionCreators.fetchSuccess.mockClear();
    actionCreators.fetchFailure.mockClear();
  });

  describe('increment(number)', () => {
    it('正しいアクションがdispatchされること', () => {
      // dispatchの呼び出し状況をスパイするためにモック関数を作る
      const mockDispatch = jest.fn();
      // スパイ用のdispatchを引数として渡してインスタンス化する
      const actions = new ActionDispatcher(mockDispatch);
      actions.increment(100);
      // dispatchが呼ばれていること
      expect(mockDispatch).toHaveBeenCalled();
      // 決められたアクションクリエーターが呼ばれたこと
      expect(actionCreators.increment).toHaveBeenCalled();

      // FETCHアクションがdispatchされること
      /*
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        type: types.INCREMENT,
        amount: 100
      });
      */
    });
  });

  describe('fetchUser()', () => {
    it('API.fetchUsers()がpayloadオブジェクトを返す場合', async () => {
      const resp = {
        payload: [{ id: 1 }, { id: 2 }]
      };
      // API.fetchUser()が返すための、resolveされたPromiseの値を設定する
      API.fetchUsers.mockResolvedValue(resp);
      // dispatchの呼び出し状況をスパイするためにモック関数を作る
      const mockDispatch = jest.fn();
      // スパイ用のdispatchを引数として渡してインスタンス化する
      const actions = new ActionDispatcher(mockDispatch);

      // run
      await actions.fetchUsers();
      // dispatchが二度呼ばれていること
      expect(mockDispatch).toHaveBeenCalledTimes(2);
      // 決められたアクションクリエーターが呼ばれたこと
      expect(actionCreators.fetch).toHaveBeenCalled();
      expect(actionCreators.fetchSuccess).toHaveBeenCalled();

      /*
      // FETCHアクションがdispatchされること
      expect(mockDispatch.mock.calls[0][0]).toEqual({ type: types.FETCH });
      // FETCH_SUCCESSアクションがdispatchされること
      expect(mockDispatch.mock.calls[1][0]).toEqual({
        type: types.FETCH_SUCCESS,
        payload: resp.payload
      });
      */
    });

    it('API.fetchUsers()がerrorオブジェクトを返す場合', async () => {
      const resp = {
        error: { message: 'エラーです' }
      };
      // API.fetchUser()が返すための、resolveされたPromiseの値を設定する
      API.fetchUsers.mockResolvedValue(resp);
      // dispatchの呼び出し状況をスパイするためにモック関数を作る
      const mockDispatch = jest.fn();
      // スパイ用のdispatchを引数として渡してインスタンス化する
      const actions = new ActionDispatcher(mockDispatch);

      // run
      await actions.fetchUsers();
      // dispatchが二度呼ばれていること
      expect(mockDispatch).toHaveBeenCalledTimes(2);
      // 決められたアクションクリエーターが呼ばれたこと
      expect(actionCreators.fetch).toHaveBeenCalled();
      expect(actionCreators.fetchFailure).toHaveBeenCalled();

      /*
      // FETCHアクションがdispatchされること
      expect(mockDispatch.mock.calls[0][0]).toEqual({ type: types.FETCH });
      // FETCH_FAILUREアクションがdispatchされること
      expect(mockDispatch.mock.calls[1][0]).toEqual({
        type: types.FETCH_FAILURE,
        error: resp.error
      });
      */
    });
  });
});
