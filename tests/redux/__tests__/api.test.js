import axios from 'axios';
import * as API from '../API';

jest.mock('axios');

describe('APIのテスト', () => {
  describe('fetchUsers()', () => {
    it('resolve', async () => {
      const resp = [{ id: 1 }, { id: 2 }];
      axios.get.mockResolvedValue(resp);
      const result = await API.fetchUsers();
      expect(result).toEqual({
        payload: resp
      });
    });

    it('reject', async () => {
      const resp = { message: 'エラーです' };
      axios.get.mockRejectedValue(resp);
      const result = await API.fetchUsers();
      expect(result).toEqual({
        error: resp
      });
    });
  });
});
