import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.brand}>
        <img className={style.brand_logo} src={"/images/movie_7.png"} alt="" />
        <div className={style.brand_info}>
          <b>Discover</b> what's in theaters, the latest trailers, the best new
          and more..
        </div>
      </div>
      <div className={style.navigation}>
        <ul className={style.menu}>
          <li>
            <Link
              to={{ pathname: "/" }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <p className={style.button}>DISCOVER</p>
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/movies", state: {type: "movie"} }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <p className={style.button}>MOVIES</p>
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/movies", state: {type: "tv"} }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <p className={style.button}>SERIES</p>
            </Link>
          </li>
          <li>
            <p className={style.button}>SIGN UP</p>
          </li>
          <li>
            <p className={[style.button, style.login].join(" ")}>LOGIN</p>
          </li>
        </ul>
        <div className={style.submenu}>
          <form className={style.form_search}>
            <div className={style.search_movie}>
              <input
                className={style.search_input}
                placeholder="Find Movies, series.. "
                type="text"
                name="name"
              />
              <div>
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
