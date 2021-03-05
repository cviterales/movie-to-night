import React from "react";
import StarsRating from '../StarsRating/StarsRating'
import style from './style.module.scss'

const Movie = (props) => {
  return (
    <li key={props.keyIndex} className={style.movie}>
      <img className={style.movie_img} src={props.poster} alt="" />
      <p>{props.title}.</p>
      <div className={style.rating}>
        <StarsRating rating={props.imdbRating}/>
        <span className={style.rating_point}>{props.imdbRating}</span>
      </div>
    </li>
  );
};
export default Movie;
