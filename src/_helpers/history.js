import { createBrowserHistory } from 'history';

let history

if (typeof document !== 'undefined') {
  // const createBrowserHistory = require('history/createBrowserHistory').default

  history = createBrowserHistory()
}

export { history };
