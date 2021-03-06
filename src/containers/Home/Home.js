import React, { useState, useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import BestMovie from "../../components/Movies/BestMovie/BestMovie";
import { getData } from "../../service/dummyData";
import style from './style.module.scss'

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let data = getData("movie");
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={style.content_movies}>
      <h1>{""}</h1>
      <Movies movies={movies} />
      <BestMovie movies={movies}/>
    </div>
  );
};

export default Home;
