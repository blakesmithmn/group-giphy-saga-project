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

//GET FAVORITES SAGA FUNCTION
function* fetchFavs() {
    try {
        const favoritesList = yield axios({
            method: 'GET',
            url: '/api/favorite'
        })
        yield put({
            type: 'SET_FAVORITES',
            payload: favoritesList.data
        })
        console.log('Favorites from DB is:', favoritesList.data);

    } catch (error) {

    }
}



// rootSaga
function* rootSaga() {
    yield takeEvery('SAGA_FETCH_FAVS', fetchFavs);
    // yield takeEvery('SAGA_FETCH_CATS');
    // yield takeEvery('SAGA_POST_FAV');
    // yield takeEvery('SAGA_PUT_CAT');
    // yield takeEvery('SAGA_SEARCH');
}

// Reducers

const favorites = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
    }
    return state;
}

const categories = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.payload;
    }
    return state;
}



const store = createStore(
    combineReducers({
        favorites,
        categories
    }),
    applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
