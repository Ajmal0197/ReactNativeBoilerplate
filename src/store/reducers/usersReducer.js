import { types } from '../ActionTypes';

const INITIAL_STATE = {
    loader: false,
    usersList: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.TOGGLE_LOADING: {
            return { ...state, loader: payload }
        }
        case types.USERS_LIST_DATA: {
            return { ...state, usersList: payload }
        }
        default: return state
    }
}