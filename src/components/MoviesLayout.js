import React, { useState, useEffect } from "react";
import { dataService } from "../service/api";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/index2.css";

const MoviesLayout = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (name) => {
    let data = await dataService.getMovieByName("iron");
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const listMoviesHandler = (minIndex, maxIndex) => {
    const listOfMovies = movies
    const result = listOfMovies.slice(minIndex, maxIndex).map((movie, index) => {
      return (
        <Movie
          keyIndex={index}
          poster={movie.Poster}
          title={movie.Title}
          imdbRating={movie.imdbRating}
        />
      );
    });
    return result;
  };
  return (
    <section className="wrapper">
      <header className="header">
        <div className="brand">
          <img
            className="brand-logo"
            src={require("../assets/movie_7.png")}
            alt=""
          />
          <div className="brand-info">
            <b>Discover</b> what's in theaters, the latest trailers, the best
            new and more..
          </div>
        </div>
        <div className="navigation">
          <ul className="menu">
            <li>
              <p className="button">DISCOVER</p>
            </li>
            <li>
              <p className="button">MOVIES</p>
            </li>
            <li>
              <p className="button">SERIES</p>
            </li>
            <li>
              <p className="button">TV SHOWS</p>
            </li>
            <li>
              <p className="button">SIGN UP</p>
            </li>
            <li>
              <p className="button login">LOGIN</p>
            </li>
          </ul>
          <div className="submenu">
            <ul className="submenu-items">
              <li>Top News</li>
              <li>Movie News</li>
              <li>TV News</li>
              <li>Latest Trailers</li>
            </ul>
            <form className="form-search">
              <div className="search-movie">
                <input
                  className="search-input"
                  placeholder="Find Movies, series.. "
                  type="text"
                  name="name"
                />
                <button>
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <section className="content-movies">
        <div className="view-movies">
          <div className="details-movies">
            <div className="title-list">
              <p className="title">In Theathers</p>
              <p className="details">See more +</p>
            </div>
            <ul className="list-movies">{listMoviesHandler(0,4)}</ul>
            <div className="title-list">
              <p className="title">Coming Soon</p>
              <p className="details">See more +</p>
            </div>
            <ul className="list-movies">{listMoviesHandler(4,8)}</ul>
          </div>
        </div>
        <div className="best-movie">
          <div className="top-movie">
            <div className="title-list">
              <p className="title">Movie of the day</p>
            </div>
            <div className="movie-description">
              <div className="description">
                <div className="title-movie">
                  <p className="best-title">
                    <b>Captain Marvel (2019)</b>
                  </p>
                  <p className="best-description">
                    PG-13 | 2h 4min | Action, Aventure, Sci-Fi
                  </p>
                  <p className="best-more">Movie details (+)</p>
                </div>
              </div>
              <picture>
                <img
                  className="best-movie-img"
                  src={require("../assets/best_movie_mm.png")}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="border"></div>
        <div className="footer-submenu">
          <ul className="footer-submenu-items">
            <li>Home</li>
            <li>Contact Us</li>
            <li>Legal</li>
            <li>Site Index</li>
          </ul>
          <div className="submenu-social">
            <span>
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </span>
            <span>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default MoviesLayout;
