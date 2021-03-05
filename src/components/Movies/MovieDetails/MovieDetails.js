import React, { useState } from "react";
import style from "./style.module.scss";
import StarsRating from "../StarsRating/StarsRating";

import moment from "moment";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(props.location.state.movie);
  console.log(movie);
  return (
    <div className={style.content_details}>
      <div className={style.content_image_details}>
        <div className={style.img_background}>
          <div className={style.img_details}>
            <img
              className={style.img_front}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
          </div>
          <div class={style.wrapper_details}>
            <p className={style.title_details}>
              {movie.title} ({moment(movie.release_date).format("YYYY")})
            </p>
            <div className={style.img_content_details}>
              <p className={style.info_details}>
                {movie.adult ? "+18" : "+13"}
              </p>
              <p className={style.info_details}>|</p>
              <p className={style.info_details}>
                {movie.original_language.toUpperCase()}
              </p>
              <p className={style.info_details}>|</p>
              <div className={style.start_rating}>
                <StarsRating rating={movie.vote_average} />
                <b>{movie.vote_average}</b>
              </div>
            </div>
            <div className={style.details}>
              <p>Type: {movie.media_type}</p>
              <p>Language: {movie.original_language}</p>
              <p>Votes: {movie.vote_average}</p>
              <p>Amount Votes: {movie.vote_count}</p>
              <p>Description: {movie.overview}</p>
              <p>Release: {movie.release_date}</p>
            </div>
          </div>
        </div>
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className={style.content_movie_details}></div>
    </div>
  );
};

export default MovieDetails;
