import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import style from "./style.module.scss";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const navItems = [
    { path: "/", name: "DISCOVER" },
    { path: "/movies", name: "MOVIES" },
    { path: "/series", name: "SERIES" },
  ];
  const location = useLocation();
  const renderNavLink = () => {
    return navItems.map((item, index) => {
      const isCurrent =
        location.pathname === item.path && location.state?.type === item.type;
      const classes = isCurrent ? "header__navigation__menu__option header__navigation__menu__option__button--active" : "header__navigation__menu__option header__navigation__menu__option__button--hover";
      return (
        <li
          key={index}
          className={classes}
        >
          <Link
            to={{ pathname: item.path }}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className="header__navigation__menu__option__button">{item.name}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    <header className="header">
      <div className="header__brand">
        <img
          className="header__brand__logo"
          src={"./images/movie_7.png"}
          alt="movie-to-night"
        />
        <div className="header__brand__info">
          <b>Discover</b> what's in theaters, the latest trailers, the best new
          and more..
        </div>
      </div>
      <div className="header__navigation">
        <ul className="header__navigation__menu">
          {renderNavLink()}
          <li className="header__navigation__menu__option">
            <p className="header__navigation__menu__option__button">SIGN UP</p>
          </li>
          <li className="header__navigation__menu__option">
            <p className="header__navigation__menu__option__button__login">
              LOGIN
            </p>
          </li>
        </ul>
        <form className="header__form">
          <div className="header__form__search">
            <input
              className="header__form__search__input"
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
    </header>
  );
};

export default Header;
