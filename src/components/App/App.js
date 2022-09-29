import React from 'react';

import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';



import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App(props) {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <h1>Giphy Search!</h1>
        {/* <Redirect from="/" to="/search" /> */}
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
