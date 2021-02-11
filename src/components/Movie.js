import React from "react";
import "../styles/index2.css";

const Movie = (props) => {
  return (
    <li key={props.keyIndex} className="movie">
      <img className="movie-img" src={props.poster} alt="" />
      <p>{props.title}.</p>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span className="rating-point">{props.imdbRating}</span>
      </div>
    </li>
  );
};
export default Movie;
