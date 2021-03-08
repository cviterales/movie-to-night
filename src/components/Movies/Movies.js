import React from "react";
import Movie from "./Movie/Movie";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Movies = (props) => {

  const listMoviesHandler = (minIndex, maxIndex, movies) => {
    const listOfMovies = movies;

    const result = listOfMovies
      .slice(minIndex, maxIndex)
      .map((movie, index) => {
        return (
          <li key={index} className={style.movie}>
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
    <div className={style.view_movies}>
      <div className={style.details_movies}>
        <div className={style.title_list}>
          <p className={style.title}>In Theathers</p>
          <Link
              to={{ pathname: "/movies", state: {type: "movie"} }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
          <p className={style.details}>See more +</p>
          </Link>
        </div>
        <ul className={style.list_movies}>
          {listMoviesHandler(0, 4, props.movies)}
        </ul>
        <div className={style.title_list}>
          <p className={style.title}>Coming Soon</p>
          <Link
              to={{ pathname: "/movies", state: {type: "tv"} }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
          <p className={style.details}>See more +</p>
          </Link>
        </div>
        <ul className={style.list_movies}>
          {listMoviesHandler(4, 8, props.movies)}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
