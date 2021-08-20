import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
const Controls = ({ type, movie }) => {
    const { addToWatched, removeWatchList, moveToWatchList } = useContext(GlobalContext)
    if (
        type === "watched"
    ) {
        return (
            <div>
                <button className="btn btn-dark">
                    <i className="fas fa-times" onClick={() => moveToWatchList(movie)}></i>
                </button>
            </div>
        )
    }
    if (
        type === "watchList"
    ) {
        return (
            <div>
                <button className="btn btn-dark " style={{"marginRight":"10px"}}>
                    <i className="fas fa-eye " onClick={() => addToWatched(movie)}></i>
                </button>
                <button className="btn btn-dark">
                    <i className="fas fa-times  " onClick={() => removeWatchList(movie.id)}></i>
                </button>
            </div>
        )
    }
}

export default Controls
