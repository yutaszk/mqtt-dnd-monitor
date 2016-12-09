import mqtt from 'mqtt';

import { keys } from '../constants';
import Dispatcher from '../dispatcher';
import ErrorAction from './error-action';
import MessageAction from './message-action';


export default class MqttAction {
  static connect(endpoint) {
    const connection = mqtt.connect(endpoint);
    connection.on('connect', () => {
      console.log(`Connected to ${endpoint}`);
      connection.on('message', (topic, message) => MessageAction.receive(topic, message));
      return Dispatcher.dispatch(
        {
          type: keys.mqtt.connected,
          connection: connection,
        }
      );
    });

    connection.on('error', () => ErrorAction.raiseError(keys.error.connection));
    connection.on('offline', () => ErrorAction.raiseError(keys.error.connection));
  }

  static disconnect() {
    return Dispatcher.dispatch(
      {
        type: keys.mqtt.disconnected,
      }
    )
  }
}
