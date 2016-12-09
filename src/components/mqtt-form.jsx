import React from 'react';

import MqttAction from '../actions/mqtt-action';


export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'ws://0.0.0.0:9001',
    };
  }

  onMqttChange(ev) {
    ev.preventDefault();
    this.setState({endpoint: ev.target.value.trim()});
  }

  handleMqttConnect(ev) {
    ev.preventDefault();
    MqttAction.connect(this.state.endpoint);
  }
  handleMqttDisconnect(ev) {
    ev.preventDefault();
    MqttAction.disconnect();
  }

  render() {
    const isConnected = this.props.appState.mqtt.connection ? true : false;
    const connectButton = isConnected ? (
      <button
        type="button" className="btn btn-danger"
        onClick={ev => this.handleMqttDisconnect(ev)}>
        Disconnect
      </button>
    ) : (
      <button
        type="button" className="btn btn-success"
        onClick={ev => this.handleMqttConnect(ev)}>
        Connect
      </button>
    );

    return (
      <div>
        <div className="form-group">
          <div className="col-md-9">
            <input
              type="text" name="name" className="form-control"
              placeholder="ws://0.0.0.0:9001"
              disabled={isConnected}
              value={this.state.endpoint} onChange={ev => this.onMqttChange(ev)}
            />
          </div>
          <div className="col-md-3">
            {connectButton}
          </div>
        </div>
      </div>
    );
  }
}