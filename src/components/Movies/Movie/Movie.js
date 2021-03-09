import React from "react";
import StarsRating from "../StarsRating/StarsRating";
import style from "./style.module.scss";
import Image from './Image/Image'

const Movie = (props) => {
  return (
    <>
      <div key={props.keyIndex} className={style.movie}>
          <Image
            src={props.poster}
          />
        {props.hover_stars ? (
          <>
            <div className={style.description}></div>
            <div className={style.info_movie}>
              <StarsRating rating={props.imdbRating} />
            </div>
          </>
        ) : null}
        {props.stars ? (
          <>
            {" "}
            <p>{props.title}.</p>
            <div className={style.rating}>
              <StarsRating rating={props.imdbRating} />
            </div>{" "}
          </>
        ) : null}
      </div>
    </>
  );
};
export default Movie;
