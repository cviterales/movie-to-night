
import React, { useState } from "react";
import "./style.scss";
import StarsRating from "../../StarsRating/StarsRating";
import { Link } from "react-router-dom";

const TopMovie = ({movies}) => {
  let index = -1;
  index = Math.floor(Math.random() * 10);
  let movie = index > -1 ? movies[index] : movies[1];

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="top">
    {loaded ? (
      <div className="top__description">
        <div className="top__description__title">
          <p>
            <b>{movie?.title}</b>
          </p>
          <div className="top__description__title__info">
            <p>
              {movie?.adult ? "+18" : "+13"}{" "}
            </p>
            |
            <p>
              {movie?.original_language.toUpperCase()}{" "}
            </p>
            |{movie ? <StarsRating rating={movie.vote_average} /> : null}
          </div>
          <Link
            to={{ pathname: "/movie_details", state: { movie: movie } }}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className="top__description__more">Movie details (+)</p>
          </Link>
        </div>
      </div>
    ) : (
      null
    )}
    <picture>
      <img
        className="top__img"
        src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
        alt={movie?.title}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </picture>
  </div>
  )
}

export default TopMovie;