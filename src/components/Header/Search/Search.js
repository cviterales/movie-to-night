import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Search = () => {
  return (
    <form className="form">
      <div className="form__search">
        <input
          className="form__search__input"
          placeholder="Find Movies, series.. "
          type="text"
          name="name"
        />
        <div>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
      </div>
    </form>
  );
};

export default Search;