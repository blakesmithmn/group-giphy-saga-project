import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';



import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import CategoryForm from '../CategoryForm/CategoryForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1B2021',
        contrastText: '#DAF5FF',
      },
      secondary: {
        main: '#028090',
        contrastText: '#FFFFFF',
      },
      background: {
        paper: '#F4F5F5',
      }
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Redirect from="/" to="/search" />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
