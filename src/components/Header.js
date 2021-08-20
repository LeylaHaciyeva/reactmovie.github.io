import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="container-fluid bg-dark pt-2 pb-2 header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <Link className="link" to="/">WatchList</Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-right">
            <Link className="watch-link link" to="/watched">Watched</Link>
            <Link className="link" to="/add">Add</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
