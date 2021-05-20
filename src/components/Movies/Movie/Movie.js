import React from "react";
import StarsRating from "../StarsRating/StarsRating";
import "./style.scss";
import Image from './Image/Image'

const Movie = (props) => {
  console.log(props)
  return (
    <>
      <div key={props.keyIndex} className="movie">
          <Image
            width={props.width}
            height={props.height}
            src={props.poster}
          />
        {props.hover_stars ? (
          <>
            <div className="movie__description"></div>
            <div className="movie__info">
              <StarsRating rating={props.imdbRating} />
            </div>
          </>
        ) : null}
        {props.stars ? (
          <>
            {" "}
            <p>{props.title}.</p>
            <div className="movie__rating">
              <StarsRating rating={props.imdbRating} />
            </div>{" "}
          </>
        ) : null}
      </div>
    </>
  );
};
export default Movie;
