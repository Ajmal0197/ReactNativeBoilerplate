import { types } from '../ActionTypes';

const INITIAL_STATE = {
    messagesModalIndex: 0,
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.CHANGE_MESSAGES_MODAL_INDEX: {
            return { ...state, messagesModalIndex: payload }
        }
        default: return state
    }
}