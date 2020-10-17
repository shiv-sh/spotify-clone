export const initialState = {
    token: null,
    // token: "BQB9LSo17YrdpAgBzMNvgOC7GW6YPEC7iS9NOinBv_z02mVEa9yINyHlc8J80w2uB4hcMpQn8S9sw9ZV20XBHYgbgnPxA_IKObE6co3oPuRTIrtY4rszMcQ4MV9cv3w6XZgYl6eqcJ-CXhndZ3Q0faSwTZQ2EYDwXgDX1DqNYbfCN7C9cOuq",
    // remove token value after finishing development
    user: null,
    playlists: [],
    tracks:null,
    playing: false,
    item: null
};

const reducer = (state, action) => {
    console.log(action);

    // Action   -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
            case 'SET_TRACKS':
            return {
                ...state,
                tracks: action.tracks
            }
        default:
            return state
    }
}

export default reducer