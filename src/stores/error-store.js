import { ReduceStore } from 'flux/utils';

import { keys, messages } from '../constants';
import Dispatcher from '../dispatcher';


class ErrorStore extends ReduceStore {
  getInitialState() {
    return '';
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.error.clear:
        return '';
      case keys.error.connection:
        return messages.error.connection;
      case keys.error.subscribe:
        return messages.error.subscribe;
      default:
        return state;
    }
  }
}

export default new ErrorStore(Dispatcher);
