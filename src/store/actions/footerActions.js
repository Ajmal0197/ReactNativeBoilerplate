import { types } from '../ActionTypes';

export const changeScreen = (index) => {
    return {
        type: types.CHANGE_SCREEN,
        payload: index
    }
}