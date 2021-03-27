import { types } from '../ActionTypes';

const INITIAL_STATE = {
    loader: false,
    footerIndex: 0,
    renderAgainStack: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.TOGGLE_LOADING: {
            return { ...state, loader: payload }
        }
        case types.CHANGE_FOOTER_INDEX: {
            return { ...state, footerIndex: payload }
        }
        case types.RENDER_AGAIN_STACK_NAV: {
            return { ...state, renderAgainStack: !state.renderAgainStack }
        }
        default: return state
    }
}