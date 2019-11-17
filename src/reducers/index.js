import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import nutrition from './nutrition';

const rootReducer = combineReducers({
    auth,
    user,
    nutrition,
});

export default rootReducer;
