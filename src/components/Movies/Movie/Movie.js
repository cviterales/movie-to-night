import React, { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import StarsRating from "../StarsRating/StarsRating";
import style from "./style.module.scss";

const Movie = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div key={props.keyIndex} className={style.movie}>
        <img
          className={style.movie_img}
          src={props.poster}
          alt=""
          onLoad={() => {
            setLoaded(true);
          }}
        />
        {loaded && (
          <>
            {props.stars ? (
              <>
                {" "}
                <p>{props.title}.</p>
                <div className={style.rating}>
                  <StarsRating rating={props.imdbRating} />
                </div>{" "}
              </>
            ) : null}
          </>
        )}
      </div>
      {!loaded && <Spinner width="50px" height="50px" />}
    </>
  );
};
export default Movie;
