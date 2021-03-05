import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/movie_7.png"
import style from './style.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.brand}>
        <img className={style.brand_logo} src={logo} alt="" />
        <div className={style.brand_info}>
          <b>Discover</b> what's in theaters, the latest trailers, the best new
          and more..
        </div>
      </div>
      <div className={style.navigation}>
        <ul className={style.menu}>
          <li>
            <p className={style.button}>DISCOVER</p>
          </li>
          <li>
            <p className={style.button}>MOVIES</p>
          </li>
          <li>
            <p className={style.button}>SERIES</p>
          </li>
          <li>
            <p className={style.button}>TV SHOWS</p>
          </li>
          <li>
            <p className={style.button}>SIGN UP</p>
          </li>
          <li>
            <p className={[style.button, style.login].join(' ')}>LOGIN</p>
          </li>
        </ul>
        <div className={style.submenu}>
          <ul className={style.submenu_items}>
            <li>Top News</li>
            <li>Movie News</li>
            <li>TV News</li>
            <li>Latest Trailers</li>
          </ul>
          <form className={style.form_search}>
            <div className={style.search_movie}>
              <input
                className={style.search_input}
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
  );
};

export default Header;
