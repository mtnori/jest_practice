import axios from 'axios';

/**
 * APIからユーザーを取得するクラス
 */
class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}
export default Users;
