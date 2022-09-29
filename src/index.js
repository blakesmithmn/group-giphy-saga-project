import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// Saga Imports
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

// SAGA Functions




// rootSaga
function* rootSaga() {
    // yield takeEvery('SAGA_FETCH_FAVS');
    // yield takeEvery('SAGA_FETCH_CATS');
    // yield takeEvery('SAGA_POST_FAV');
    // yield takeEvery('SAGA_PUT_CAT');
    // yield takeEvery('SAGA_SEARCH');
  }

// Reducers

const favorites = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAVORITES':
            return action.payload;
    }
    return state;
}

const catagories = (state = [], action) => {
    switch(action.type) {
        case 'SET_CATAGORIES':
            return action.payload;
    }
    return state;
}



const store = createStore(
    combineReducers({ 
        favorites, 
        catagories 
    }),
    applyMiddleware(sagaMiddleware, logger)
  );

// Pass rootSaga
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
