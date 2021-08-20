import React, { useState } from "react";
import Result from "./Result";
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
  };
  return (
    <div>
      <div className="container d-flex justify-content-center mt-5 ml-auto mr-auto w-100">
        <form action="">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleChange}
            className="search-input"
          />
        </form>
      </div>
      {results.length > 0 && (
        <div className="container">
          <div className="row">
            {results.map((movie) => {
              return (
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-12"
                  key={movie.id}
                >
                  <Result movie={movie}></Result>
                </div>
              );
            })}
          </div>
        </div>


      )}
    </div>
  );
};
