import { keys } from '../constants';
import Dispatcher from '../dispatcher';


export default class MessageAction {
  static receive(topic, message) {
    return Dispatcher.dispatch(
      {
        type: keys.message.received,
        topic: topic,
        message: message.toString(),
      }
    )
  }
}
