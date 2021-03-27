import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import authReducer from './authReducer';
import chatReducer from './chatReducer';
import teamReducer from './teamReducer';
import usersReducer from './usersReducer';
import { types } from '../ActionTypes';

const appReducer = combineReducers({
    globalReducer,
    authReducer,
    chatReducer,
    teamReducer,
    usersReducer
});
const rootReducer = (state, action) => {
    if (action.type === types.DESTROY_SESSION)
        state = undefined;

    return appReducer(state, action);
}

export default rootReducer;
