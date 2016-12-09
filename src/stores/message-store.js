import { ReduceStore } from 'flux/utils';

import { keys } from '../constants';
import Dispatcher from '../dispatcher';


class MessageStore extends ReduceStore {
  getInitialState() {
    return {};
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.message.received: {
        let nextState = Object.assign({}, state);
        nextState[action.topic] = [...(state[action.topic] || []), action.message];
        return nextState;
      }
      default:
        return state;
    }
  }
}

export default new MessageStore(Dispatcher);
