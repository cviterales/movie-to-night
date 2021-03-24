import React from "react";
import Menu from './Menu/Menu'
import Search from './Search/Search'
import "./style.scss";

const Header = () => {
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
        <Menu />
        <Search />
      </div>
    </header>
  );
};


export default Header;
