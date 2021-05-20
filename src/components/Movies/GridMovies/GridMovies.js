import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./style.scss";

import { getData } from "../../../service/dummyData";
import { Link } from "react-router-dom";

const GridMovies = (props) => {
  const type = props.location.pathname === "/movies" ? "movie" : "tv"
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
      return (
        <div className="grid_movie" key={movie.id}>
          <Link
            to={{ pathname: "/movie_details", state: { movie: movie } }}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Movie
              keyIndex={movie.id}
              poster={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              title={movie.title}
              imdbRating={movie.vote_average}
              stars={false}
              hover_stars={true}
              width={420}
              height={650}
            />
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="grid">
      {type ? (
        renderMovies(movies)
      ) : (
        <div
          style={{
            fontSize: "20px",
            color: "#fff",
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        >
          OH! An error ocurred!
        </div>
      )}
    </div>
  );
};

export default GridMovies;
