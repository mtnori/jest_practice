import axios from 'axios';
import Users from './users';

// axiosモジュールをモック化する
jest.mock('axios');

test('should fetch users', () => {
  const resp = { data: [{ name: 'Bob' }] };
  // axios.get('/users.json')が偽の応答を返すようにする
  axios.get.mockResolvedValue(resp);

  // ユースケースに応じて以下のような構文も書ける
  // axios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all().then(users => expect(users).toEqual(resp.data));
});
