export const AppReducers = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload]
            }
        case "REMOVE_TO_WATCH_LIST":
            return {
                ...state,
                watchList:[...state.watchList.filter((movie)=>movie.id !==action.payload)]
            }
        case "ADD_TO_WATCHED":
            return {
                ...state,
                watchList:[...state.watchList.filter((movie)=>movie.id !== action.payload.id)],
                watched:[action.payload,...state.watched]
            }
        case "MOVE_TO_WATCH_LIST":
            return {
                ...state,
                watched:[...state.watched.filter((movie)=>movie.id !==action.payload.id)],
                watchList:[action.payload,...state.watchList]

            }
        default:
            return state
    }
}