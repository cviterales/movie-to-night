import React, { useState } from "react";
import style from "./style.module.scss";
import StarsRating from "../StarsRating/StarsRating";

import moment from "moment";


const MovieDetails = (props) => {
  const [movie] = useState(props.location.state.movie);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={style.content_details}>
      <div className={style.content_image_details}>
        {loaded && (
          <>
            <div className={style.img_background}>
              <div className={style.img_details}>
                <img
                  className={style.img_front}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className={style.wrapper_details}>
                <p className={style.title_details}>
                  {movie.title ? movie.title : movie.original_name} ({moment(movie.release_date).format("YYYY")})
                </p>
                <div className={style.movie_content_details}>
                  <p className={style.info_details}>
                    {movie.adult ? "+18" : "+13"}
                  </p>
                  <p className={style.info_details}>|</p>
                  <p className={style.info_details}>
                    {movie.original_language.toUpperCase()}
                  </p>
                  <p className={style.info_details}>|</p>
                  <div className={style.star_rating}>
                    <StarsRating rating={movie.vote_average} />
                  </div>
                </div>
                <div className={style.movie_details}>
                  <div className={style.details}>
                    <p>Votes: {movie.vote_average}</p>
                    <p>Amount Votes: {movie.vote_count}</p>
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      margin: "1rem 0rem",
                    }}
                  >
                    <p>{movie.overview}</p>
                  </div>

                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <p>
                      Release: {moment(movie.release_date).format("DD-MM-YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt=""
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </div>
      {loaded && <div className={style.content_movie_details}></div>}
    </div>
  );
};

export default MovieDetails;
