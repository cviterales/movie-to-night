import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const navItems = [
    { path: "/", name: "DISCOVER", type: "" },
    { path: "/movies", name: "MOVIES", type: "movie" },
    { path: "/movies", name: "SERIES", type: "tv" },
  ];
  const location = useLocation();
  const renderNavLink = () => {
    return navItems.map((item, index) => {
      const type = item.type !== "" ? item.type : "";
      const isCurrent =
        location.pathname === item.path && location.state?.type === item.type;
      return (
        <li
          key={index}
          className={`${style.option_menu} ${
            isCurrent ? style.active_option_menu : null
          }`}
        >
          <Link
            to={{ pathname: item.path, state: { type } }}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className={style.button}>{item.name}</p>
          </Link>
        </li>
      );
    });
  };
  //const isCurrent = window.location.pathname === item.path;
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
          {renderNavLink()}
          <li className={`${style.option_menu}`}>
            <p className={style.button}>SIGN UP</p>
          </li>
          <li className={`${style.option_menu}`}>
            <p className={[style.button, style.login].join(" ")}>LOGIN</p>
          </li>
        </ul>
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
    </header>
  );
};

export default Header;
