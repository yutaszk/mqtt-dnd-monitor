import { keys } from '../constants';
import Dispatcher from '../dispatcher';
import ErrorAction from './error-action';


export default class TopicAction {
  static subscribe(topic, topics, connection) {
    if (connection === null || topic === '' || topics.length === 6) {
      return ErrorAction.raiseError(keys.error.subscribe);
    }
    connection.subscribe(topic);
    console.log(`subscribe: ${topic}`);
    return Dispatcher.dispatch(
      {
        type: keys.topic.subscribed,
        topic: topic,
      }
    )
  }

  static unsubscribe(topic, connection) {
    if (connection === null) {
      return ErrorAction.raiseError(keys.error.subscribe);
    }
    connection.unsubscribe(topic);
    console.log(`unsubscribe: ${topic}`);
    return Dispatcher.dispatch(
      {
        type: keys.topic.unsubscribed,
        topic: topic,
      }
    )
  }

  static rearrange(topics) {
    return Dispatcher.dispatch(
      {
        type: keys.topic.rearranged,
        topics: topics,
      }
    )
  }
}
