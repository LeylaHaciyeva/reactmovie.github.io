import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import Controls from './Controls'
const WatchList = () => {
    const {watchList}=useContext(GlobalContext)
    return (
        <div className="container">
            {
                watchList.map((movie)=>{
                   return (<div className="movie">
                   <img className="image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                   <div className="desc">
                       <h1>{movie.title}</h1>
                       <span>{movie.release_date}</span>
                       <p>{movie.overview.substr(0,160)}...</p>
                   <Controls movie={movie} type="watchList"/></div>
                   </div>                   
                )})
            }
        </div>
    )
}

export default WatchList
