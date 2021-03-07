import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import style from "./style.module.scss";

import { getData } from "../../../service/dummyData";
import { Link } from "react-router-dom";

const GridMovies = (props) => {

  const type = props.location.state ? props.location.state.type : "movies"
  const [movies, setMovies] = useState([]);

  const getMovies = async (type) => {
    let data = getData(type);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies(type);
  }, [type]);

  const renderMovies = (movies) => {
    return movies.map((movie) => {
      let index = Math.floor(Math.random() * 2000);
      return (
        <div className={style.movie} key={index}>
          <Link
            to={{ pathname: "/movie_details", state: { movie: movie } }}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Movie
              keyIndex={index}
              poster={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              title={movie.title}
              imdbRating={movie.vote_average}
              stars={false}
            />
          </Link>
        </div>
      );
    });
  };
  return <div className={style.grid}>{renderMovies(movies)}</div>;
};

export default GridMovies;
