import { all } from 'redux-saga/effects';
import { sagaWatcher } from './testSagas';
// import { userSagaWatcher } from './userSagas';

export function* rootSaga() {
  yield all([
    sagaWatcher(),
    // userSagaWatcher()
  ]);
}
