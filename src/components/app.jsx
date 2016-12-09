import React from 'react';
import { Container } from 'flux/utils';

import ErrorStore from '../stores/error-store';
import MessageStore from '../stores/message-store';
import MqttStore from '../stores/mqtt-store';
import TopicStore from '../stores/topic-store';
import MqttForm from './mqtt-form';
import SubscriptionList from './subscription-list';
import TopicForm from './topic-form';


class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [
      TopicStore,
      MqttStore,
      MessageStore,
      ErrorStore,
    ];
  }

  static calculateState() {
    return {
      appState: {
        topics: TopicStore.getState(),
        mqtt: MqttStore.getState(),
        messages: MessageStore.getState(),
        error: ErrorStore.getState(),
      },
    };
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="col-md-4">
            <TopicForm appState={this.state.appState} />
          </div>
          <div className="col-md-4" >
            {
              this.state.appState.error &&
              <div className="alert alert-danger" role="alert">
                {this.state.appState.error}
              </div>
            }
          </div>
          <div className="col-md-4" >
            <MqttForm appState={this.state.appState} />
          </div>
        </div>
        <div className="container" style={{ marginTop: 20 }} >
          <SubscriptionList appState={this.state.appState} />
        </div>
      </div>
    );
  }
}

const App = Container.create(Root);
export default App;
