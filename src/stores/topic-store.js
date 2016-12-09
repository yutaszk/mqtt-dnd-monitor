import { ReduceStore } from 'flux/utils';

import { keys } from '../constants';
import Dispatcher from '../dispatcher';


class TopicStore extends ReduceStore {
  getInitialState() {
    return [];
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.topic.subscribed: {
        if (state.includes(action.topic)) return state;
        return [...state, action.topic];
      }
      case keys.topic.unsubscribed:
        return state.filter(t => t !== action.topic);
      case keys.topic.rearranged:
        return action.topics;
      default:
        return state;
    }
  }
}

export default new TopicStore(Dispatcher);
