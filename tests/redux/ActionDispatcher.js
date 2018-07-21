import * as API from './API';
import * as actions from './ActionCreators';

export default class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  increment(amount: number) {
    this.dispatch(actions.increment(amount));
  }

  async fetchUsers(): Promise<void> {
    this.dispatch(actions.fetch());
    const { payload, error } = await API.fetchUsers();
    if (payload && !error) {
      this.dispatch(actions.fetchSuccess(payload));
    } else {
      this.dispatch(actions.fetchFailure(error));
    }
  }
}
