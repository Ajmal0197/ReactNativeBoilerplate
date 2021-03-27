import { types } from '../ActionTypes';

const INITIAL_STATE = {
    loader: false,
    createTeamModalIndex: 0,
    teamList: [
        {
            id: 1, team_name: "Team1", game_name: "CS:GO", platform: "PC", player_count: 5, team_wins: 1, team_losses: 2, team_draws: 1,
            team_players: [{ id: 11, name: "player1", isLeader: false }, { id: 12, name: "player2", isLeader: true }]
        },
        {
            id: 2, team_name: "Team2", game_name: "PUBG", platform: "XBOX", player_count: 4, team_wins: 2, team_losses: 1, team_draws: 0,
            team_players: [{ id: 21, name: "player1", isLeader: true }]
        }
    ]
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.TOGGLE_LOADING: {
            return { ...state, loader: payload }
        }
        case types.CHANGE_CREATE_TEAM_MODAL_INDEX: {
            return { ...state, createTeamModalIndex: payload }
        }
        case types.TEAM_LIST_DATA: {
            return { ...state, teamList: payload }
        }
        case types.UPDATE_TEAM_LIST: {
            return { ...state, teamList: state.teamList }
        }
        default: return state
    }
}