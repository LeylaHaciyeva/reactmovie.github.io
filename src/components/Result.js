import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

const Result = ({ movie }) => {
    const { addToWatchList, watchList } = useContext(GlobalContext)
    let storedMovie = watchList.find(o => o.id === movie.id)
    const watchListDisabled = storedMovie ? true : false
    console.log(movie);
    return (
        <div className="movie">
            <img className="image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <div className="desc">
                <h1>{movie.title}</h1>
                <span>{movie.release_date}</span>
                <p>{movie.overview.substr(0,160)}...</p>
                <button
                    className="btn btn-success"
                    disabled={watchListDisabled}
                    onClick={() => addToWatchList(movie)}>
                    Add to WatchList
                </button>
            </div>
        </div>
    )
}

export default Result
