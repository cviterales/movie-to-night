import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import MovieDetails from './components/Movies/MovieDetails/MovieDetails'
import "./styles/index2.css"

function App() {
  return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path={"/movie_details"} component={MovieDetails} />
        </Layout>
      </Switch>
  );
}

export default App;
