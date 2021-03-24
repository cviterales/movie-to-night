import React, { useState } from "react";
import "./style.scss";
import StarsRating from "../StarsRating/StarsRating";

import moment from "moment";


const MovieDetails = (props) => {
  const [movie] = useState(props.location.state ? props.location.state.movie : null);
  const [loaded, setLoaded] = useState(false);

  let renderDetails = <div style={{fontSize: "20px", color: "#fff", position: "absolute", left: "50%", top: "50%"}}>OH! An error ocurred!</div>

  if (movie) {
    renderDetails = (
      <div className="content">
      <div className="content__image">
        {loaded && (
          <>
            <div className="content__image__background">
              <div className="content__image__background__details">
                <img
                  className="content__image__background__details__img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="content__image__background__movie">
                <p>
                  {movie.title ? movie.title : movie.original_name} ({moment(movie.release_date).format("YYYY")})
                </p>
                <div className="content__image__background__movie__info">
                  <p>
                    {movie.adult ? "+18" : "+13"}
                  </p>
                  <p>|</p>
                  <p>
                    {movie.original_language.toUpperCase()}
                  </p>
                  <p>|</p>
                  <div className="content__image__background__movie__info__star">
                    <StarsRating rating={movie.vote_average} />
                  </div>
                </div>
                <div className="content__image__background__movie__details">
                  <div className="content__image__background__movie__details__first">
                    <p>Votes: {movie.vote_average}</p>
                    <p>Amount Votes: {movie.vote_count}</p>
                  </div>
                  <div
                    className="content__image__background__movie__details__second"
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
          className="content__image__img"
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </div>
{/*       {loaded && <div className={style.content_movie_details}></div>} */}
    </div>
    )
  }
  return (
    <div>{renderDetails}</div>
  );
};

export default MovieDetails;
