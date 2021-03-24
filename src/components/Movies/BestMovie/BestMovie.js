import React from "react";
import "./style.scss";
import TopMovie from './TopMovie/TopMovie'

const BestMovie = ({ movies }) => {

  return (
    <div className="best">
      <div className="best__top">
        <div className="best__top__list">
          <p className="best__top__list__title">Movie of the Day</p>
        </div>
        <TopMovie movies={movies}/>
      </div>
    </div>
  );
};

export default BestMovie;
