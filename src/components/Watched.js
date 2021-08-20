import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import Controls from './Controls'
const Watched = () => {
    const { watched } = useContext(GlobalContext)
    return (
        <div className="container">
            {
                watched.map((movie) => {
                    return (<div className="movie">
                        <img className="image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <div className="desc">
                            <h1>{movie.title}</h1>
                            <span>{movie.release_date}</span>
                            <p>{movie.overview.substr(0, 160)}...</p>
                            <Controls movie={movie} type="watched" /></div>
                    </div>)
                })
            }

        </div>
    )
}

export default Watched
