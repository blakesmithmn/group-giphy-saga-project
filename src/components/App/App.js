import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';



import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import CategoryForm from '../CategoryForm/CategoryForm';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <h1>Giphy Search!</h1> */}
        {/* <Redirect from="/" to="/search" /> */}
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/categories">
          <CategoryForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
