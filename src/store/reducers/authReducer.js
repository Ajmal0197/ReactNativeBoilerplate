import { types } from '../ActionTypes';
import ListOfGames from '../../constants/ListOfGames'

const INITIAL_STATE = {
    loginData: null,
    userData: null,
    listOfGames: [],
    selectedGamesCount: 0,
    selectedGames: [],
    userDataUrl: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.INSERT_LIST_OF_GAMES: {
            return { ...state, listOfGames: ListOfGames }
        }

        case types.GAMES_SELECT_TYPE: {
            let arrOfGames = state.listOfGames

            //Find and update isSelected attibute    
            objIndex = arrOfGames.findIndex((obj => obj.id == payload));
            if (!arrOfGames[objIndex].isSelected) {
                arrOfGames[objIndex].isSelected = true
                arrOfGames[objIndex].enteredName = ''
            } else {
                arrOfGames[objIndex].isSelected = false
                arrOfGames[objIndex].enteredName = ''
            }

            // selected games array of obj.
            const selectedGames = arrOfGames
                .filter(x => x.isSelected === true)
            // .map(x => x.name)

            return { ...state, listOfGames: arrOfGames, selectedGames, selectedGamesCount: selectedGames.length, }
        }

        case types.UPDATE_SELECTED_GAME_USERNAME: {
            let arrOfGames2 = state.selectedGames
            arrOfGames2[payload.currentIndex].enteredName = payload.enteredNameS
            return { ...state, selectedGames: arrOfGames2 }
        }

        case types.UPDATE_USER_DATA: {
            let data = {
                accessToken: payload.split('accessToken=').pop().split('&')[0],
                refreshToken: payload.split('refreshToken=').pop().split('&')[0],
                twitchId: payload.split('twitchId=').pop().split('&')[0],
                twitchUserName: payload.split('twitchUserName=').pop().split('&')[0],
                twitchProfileImage: payload.split('twitchProfileImage=').pop().split('&')[0],
                userId: payload.split('userId=').pop()[0],
            }

            return { ...state, userData: data, userDataUrl: payload }
        }

        default: return state
    }
}