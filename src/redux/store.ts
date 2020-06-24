import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
// import { forbiddenWordsMiddlwware } from './middleware';
import createSagasMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';
import { getAppInfo } from './actions/actions';

const preloadedState = {};
const saga = createSagasMiddleware();

const store: any = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(
    thunk,
    // forbiddenWordsMiddlwware,
    saga
  )
);

store.dispatch(getAppInfo());

saga.run(rootSaga);

store.subscribe(() => {
  console.log('updated state: ', store.getState());
});

export default store;
