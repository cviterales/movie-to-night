import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const StarsRating = ({ rating }) => {
  const roundRating = (number) => {
    return Math.round((number / 2) * 2) / 2;
  };

  const maxRating = 5;

  let num = roundRating(rating);

  let starsArr = [];

  const renderStars = () => {
    for (let i = 0; i < Math.floor(num); i++) {
      starsArr.push(<FontAwesomeIcon className={styles.content_star} icon={faStar} color="rgb(255, 196, 0);" size="sm" key={Math.random()} />);
    }
    if (num - Math.floor(num) !== 0) {
      starsArr.push(<FontAwesomeIcon className={styles.content_star} icon={faStarHalfAlt} color="rgb(255, 196, 0);" size="sm" key={Math.random()} />);
    }
    if (num < 5) {
      for (let i = starsArr.length; i < maxRating; i++) {
        starsArr.push(<FontAwesomeIcon className={styles.content_star} icon={emptyStar} color="rgb(255, 196, 0);" size="sm" key={Math.random()} />);
      }
    }
  };

  renderStars();
  return (
    <div className={styles.wrapper_stars} key={Math.random()}>
      {starsArr}
      <b>{rating.toFixed(1)}</b>
    </div>
  );
};

StarsRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarsRating;
