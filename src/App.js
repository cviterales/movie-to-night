import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
//Components
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import Spinner from "./components/Spinner/Spinner";
import "./styles/index.scss";

const MovieDetails = lazy(() =>
  import("./components/Movies/MovieDetails/MovieDetails")
);
const MoviesGrid = lazy(() =>
  import("./components/Movies/GridMovies/GridMovies")
);

function App() {
  return (
    <Suspense
      fallback={
        <div style={{ position: "absolute", left: "50%", top: "50%" }}>
          <Spinner />
        </div>
      }
    >
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie_details" component={MovieDetails} />
          <Route exact path="/movies" component={MoviesGrid} />
          <Route exact path="/series" component={MoviesGrid} />
        </Layout>
      </Switch>
    </Suspense>
  );
}

export default App;