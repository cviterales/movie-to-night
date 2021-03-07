import React, { useState } from "react";
import style from "./style.module.scss";
import StarsRating from "../StarsRating/StarsRating";
import { Link } from "react-router-dom";

const BestMovie = ({ movies }) => {
  let index = -1;
  index = Math.floor(Math.random() * 10);
  let movie = index > -1 ? movies[index] : movies[1];

  const [loaded, setLoaded] = useState(false);
  return (
    <div className={style.best_movie}>
      <div className={style.top_movie}>
        <div className={style.title_list}>
          <p className={style.title}>Movie of the Day</p>
        </div>

        <div className={style.movie_description}>
          {loaded ? (
            <div className={style.description}>
              <div className={style.title_movie}>
                <p className={style.best_title}>
                  <b>{movie?.title}</b>
                </p>
                <div className={style.info_movie}>
                  <p className={style.best_description}>
                    {movie?.adult ? "+18" : "+13"}{" "}
                  </p>
                  |
                  <p className={style.best_description}>
                    {movie?.original_language.toUpperCase()}{" "}
                  </p>
                  |{movie ? <StarsRating rating={movie.vote_average} /> : null}
                </div>
                <Link
                  to={{ pathname: "/movie_details", state: { movie: movie } }}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <p className={style.best_more}>Movie details (+)</p>
                </Link>
              </div>
            </div>
          ) : (
            null
          )}
          <picture>
            <img
              className={style.best_movie_img}
              src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
              alt=""
              onLoad={() => {
                setLoaded(true);
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default BestMovie;
