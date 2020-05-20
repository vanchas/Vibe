import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const preloadedState  = {};

const store: any = createStore(
  rootReducer,
  preloadedState 
);

store.subscribe(() => {
  // console.log('updated state: ', store.getState());
});

export default store;
