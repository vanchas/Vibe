import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import { appReducer } from './appReducer';
import { providerReducer } from './providerReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    testPosts: testReducer,
    app: appReducer,
    provider: providerReducer,
    user: userReducer
});

export default rootReducer;
