import React from "react";
import bestMovie from "../../../assets/best_movie_mm.png"
import style from './style.module.scss'

const BestMovie = () => {
  return (
    <div className={style.best_movie}>
      <div className={style.top_movie}>
        <div className={style.title_list}>
          <p className={style.title}>Movie of the Day</p>
        </div>
        <div className={style.movie_description}>
          <div className={style.description}>
            <div className={style.title_movie}>
              <p className={style.best_title}>
                <b>Captain Marvel (2019)</b>
              </p>
              <p className={style.best_description}>
                PG-13 | 2h 4min | Action, Aventure, Sci-Fi
              </p>
              <p className={style.best_more}>Movie details (+)</p>
            </div>
          </div>
          <picture>
            <img className={style.best_movie_img} src={bestMovie} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default BestMovie;
