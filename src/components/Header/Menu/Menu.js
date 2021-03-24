import React from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
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
      const classes = isCurrent
        ? "menu__option menu__option__button--active"
        : "menu__option menu__option__button--hover";
      return (
        <li key={index} className={classes}>
          <Link
            to={{ pathname: item.path }}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className="menu__option__button">
              {item.name}
            </p>
          </Link>
        </li>
      );
    });
  };

  return (
    <ul className="menu">
      {renderNavLink()}
      <li className="menu__option">
        <p className="menu__option__button">SIGN UP</p>
      </li>
      <li className="menu__option">
        <p className="menu__option__button__login">LOGIN</p>
      </li>
    </ul>
  );
};

export default Menu;