import React from "react";
import style from "./style.module.scss";
import PropTypes from "prop-types";

const Spinner = ({ color = "gray", width = 4, height=6}) => {
  const obj = {
    borderTop: `0.5em solid ${color}`,
    borderRight: `0.5em solid ${color}`,
    borderBottom: `0.5em solid ${color}`,
    borderLeft: `0.5em solid #ffffff`,
    width: `${width}`,
    height: `${height}`,
  };

  return (
    <div className={style.loader} style={obj}>
      Loading...
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Spinner;
