import React, { createContext, useEffect, useReducer } from 'react'
import { AppReducers } from './AppReducers'
const initialState = {
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
    watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
}
export const GlobalContext = createContext(initialState)
const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducers, initialState)
    const addToWatchList = (movie) => {
        dispatch({ type: "ADD_TO_WATCH_LIST", payload: movie })
    }
    const removeWatchList = (movie) => {
        dispatch({ type: "REMOVE_TO_WATCH_LIST", payload: movie })
    }
    const addToWatched = (movie) => {
        dispatch({ type: "ADD_TO_WATCHED", payload: movie })
    }
    const moveToWatchList = (movie) => {
        dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie })
    }
    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])
    return (
        <GlobalContext.Provider value={{ watched: state.watched, watchList: state.watchList, addToWatchList, addToWatched, removeWatchList, moveToWatchList }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
