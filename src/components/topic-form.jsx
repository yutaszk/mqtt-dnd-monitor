import React from 'react';

import TopicAction from '../actions/topic-action';


export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
    };
  }

  onTopicChange(ev) {
    ev.preventDefault();
    this.setState({topic: ev.target.value.trim()});
  }

  handleTopicSubscribe(ev) {
    ev.preventDefault();
    TopicAction.subscribe(this.state.topic, this.props.appState.topics, this.props.appState.mqtt.connection);
    this.setState({topic: ''});
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <div className="col-md-9">
            <input
              type="text" name="name" className="form-control"
              placeholder="topic"
              value={this.state.topic} onChange={ev => this.onTopicChange(ev)}
            />
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-success" onClick={ev => this.handleTopicSubscribe(ev)}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  }
}
