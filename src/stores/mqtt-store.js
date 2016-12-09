import { ReduceStore } from 'flux/utils';

import { keys } from '../constants';
import Dispatcher from '../dispatcher';


class MqttStore extends ReduceStore {
  getInitialState() {
    return {
      connection: null,
    };
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.mqtt.connected:
        return {
          connection: action.connection,
        };
      case keys.mqtt.disconnected:
        return this.getInitialState();
      default:
        return state;
    }
  }
}

export default new MqttStore(Dispatcher);
