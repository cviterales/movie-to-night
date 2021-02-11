import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

//Components
import MoviesLayout from './components/MoviesLayout'

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <MoviesLayout/>
      </Route>
    </Router>
  );
}

export default App;
