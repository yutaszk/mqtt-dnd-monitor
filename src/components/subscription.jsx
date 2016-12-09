import React from 'react';

import TopicAction from '../actions/topic-action';


const Subscription = ({appState, topic}) => (
  <div>
    <div className="panel panel-success" >
      <div className="panel-heading" >
        {topic}
        <button
          type="button" className="btn pull-right"
          style={{ height: 21, width: 21, padding: 0}}
          onClick={() => TopicAction.unsubscribe(topic, appState.mqtt.connection)}
        >
          x
        </button>
      </div>
      <div className="panel-body">
        <ul className="list-group">
          {
            (appState.messages[topic] || []).map((message, idx) => (
              <li key={idx} className="list-group-item">
                {message}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
);

export default Subscription;
