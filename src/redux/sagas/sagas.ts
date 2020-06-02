import { all } from 'redux-saga/effects';
import { sagaWatcher } from './testSagas';

export function* rootSaga() {
  yield all([
    sagaWatcher()
  ]);
}
