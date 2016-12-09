import { keys } from '../constants';
import Dispatcher from '../dispatcher';


export default class ErrorAction {
  static raiseError(key) {
    Dispatcher.dispatch(
      {
        type: key,
      }
    );
    setTimeout(
      () => {
        return Dispatcher.dispatch(
          {
            type: keys.error.clear,
          }
        )
      },
      5000
    )
  }
}
