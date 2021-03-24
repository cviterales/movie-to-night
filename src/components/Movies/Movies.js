import React from "react";
import Movie from "./Movie/Movie";
import "./style.scss";
import { Link } from "react-router-dom";
const Movies = (props) => {

  const listMoviesHandler = (minIndex, maxIndex, movies) => {
    const listOfMovies = movies;

    const result = listOfMovies
      .slice(minIndex, maxIndex)
      .map((movie, index) => {
        return (
          <li key={index} className="view__movies__details__list__movie">
            <Link to={{ pathname: "/movie_details", state: { movie: movie } }} style={{textDecoration: 'none', color: '#fff'}}>
              <Movie
                keyIndex={index}
                poster={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                title={movie.title}
                imdbRating={movie.vote_average}
                stars={true}  
                hover_stars={false}            
              />
            </Link>
          </li>
        );
      });
    return result;
  };

  return (
    <div className="view__movies">
      <div className="view__movies__details">
        <div className="view__movies__details__content">
          <p>In Theathers</p>
          <Link
              to={{ pathname: "/movies", state: {type: "movie"} }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
          <p className="view__movies__details__content__title">See more +</p>
          </Link>
        </div>
        <ul className="view__movies__details__list">
          {listMoviesHandler(0, 4, props.movies)}
        </ul>
        <div className="view__movies__details__content">
          <p>Coming Soon</p>
          <Link
              to={{ pathname: "/movies", state: {type: "tv"} }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
          <p className="view__movies__details__content__title">See more +</p>
          </Link>
        </div>
        <ul className="view__movies__details__list">
          {listMoviesHandler(4, 8, props.movies)}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
