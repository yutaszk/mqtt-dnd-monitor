import React from 'react';
import {DragDropContext,DropTarget,DragSource} from 'react-dnd'
import ReactDnDHTML5Backend from 'react-dnd-html5-backend'

import TopicAction from '../actions/topic-action';
import Subscription from './subscription'


@DragDropContext(ReactDnDHTML5Backend)
export default class SubscriptionList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container" >
        {
          this.props.appState.topics.map((topic, idx) => {
            return (
              <DraggableSubscription
                key={idx}
                topic={topic}
                onDrop={
                  (toTopic, fromTopic) => {
                    console.log('dnd', toTopic, fromTopic);
                    const topics = this.props.appState.topics.slice();
                    const toIdx = topics.findIndex(t => t === toTopic);
                    const fromIdx = topics.findIndex(t => t === fromTopic);
                    const _toTopic = topics[toIdx];
                    topics[toIdx] = topics[fromIdx];
                    topics[fromIdx] = _toTopic;
                    TopicAction.rearrange(topics)
                  }
                }
              >
                <Subscription topic={topic} appState={this.props.appState} />
              </DraggableSubscription>
            )
          })
        }
      </div>
    );
  }
}


@DropTarget(
  'topic',
  {
    drop: (dropProps, monitor, dropComponent) => {
      const dragProps = monitor.getItem();
      if (dropProps.topic !== dragProps.topic) dragProps.onDrop(dragProps.topic, dropProps.topic);
    }
  },
  connect => ({ connectDropTarget: connect.dropTarget() })
)
@DragSource(
  'topic',
  { beginDrag: props => props },
  (connect, monitor) => (
    {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }
  )
)
class DraggableSubscription extends React.Component {
  render() {
    return this.props.connectDragSource(this.props.connectDropTarget(
      <div className="col-md-2">
        {this.props.children}
      </div>
    ));
  }
}
