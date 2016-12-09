export const keys = {
  topic: {
    subscribed: Symbol('TOPIC_SUBSCRIBED'),
    unsubscribed: Symbol('TOPIC_UNSUBSCRIBED'),
    rearranged: Symbol('TOPICS_REARRANGED'),
  },
  mqtt: {
    connected: Symbol('MQTT_CONNECTED'),
    disconnected: Symbol('MQTT_DISCONNECTED'),
  },
  message: {
    received: Symbol('MESSAGE_RECEIVED'),
  },
  error: {
    clear: Symbol('ERROR_CLEARED'),
    connection: Symbol('CONNECTION_ERROR'),
    subscribe: Symbol('SUBSCRIBE_ERROR'),
  },
};

export const messages = {
  error: {
    connection: 'Connection に失敗しました。',
    subscribe: 'Subscribe に失敗しました。',
  },
};