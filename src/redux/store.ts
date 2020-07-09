import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const preloadedState = {};

const store: any = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(
    thunk,
  )
);

store.subscribe(() => {
  console.log('updated state: ', store.getState());
});

export default store;
