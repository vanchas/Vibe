import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import { appReducer } from './appReducer';
import { providerReducer } from './providerReducer';
import { userReducer } from './userReducer';
import { adminReducer } from './adminReducer';

const rootReducer = combineReducers({
    testPosts: testReducer,
    app: appReducer,
    provider: providerReducer,
    user: userReducer,
    admin: adminReducer
});

export default rootReducer;
