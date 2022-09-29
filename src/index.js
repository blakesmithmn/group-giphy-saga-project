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

function* searchGif(action){
    // action.payload is a string
    const search = action.payload.data;

    try{
        const searchRes = yield axios({
            method: 'GET',
            url: `/search/${search}`
        })
        yield put({
            type: 'SET_SEARCH_RESULTS',
            payload: searchRes.data
        })
    }catch(error){
        console.log(error);
    }
}

function* addFav(gifUrl){
    try{
        yield axios({
            method: 'POST',
            url: '/api/favorite',
            data: gifUrl.payload
        })
    }catch(error){
        console.log(error);
    }
}

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
        console.log(error);
        alert('Error fetching favs');
    }
}     

function* fetchCategories() {
    try {
        // Fetch categories
        const categories = yield axios.get('/api/category');
        // Fill category reducer
        yield console.log(categories);
        yield put ({
            type: 'SET_CATEGORIES',
            payload: categories.data
        });
    } catch(error) {
        console.log(error);
        alert('Error fetching categories');
    }
}

function* updateCategoryOfFavorite(action) {
    try {
        const newCategoryId = action.payload.newCategoryId;
        const updateId = action.payload.favoriteId;
        // Send new category ID to put into favorites table
        yield axios.put(`/api/favorite/${updateId}`, {newCategoryId});
        // Re-render DOM (actually don't need to??)
        yield put ({
            type: 'SAGA_FETCH_FAVS'
        })

    } catch(error) {
        console.log(error);
        alert('Error updating gif category');
    }
}



// rootSaga
function* rootSaga() {
    yield takeEvery('SAGA_FETCH_FAVS', fetchFavs);
    yield takeEvery('SAGA_FETCH_CATS', fetchCategories);
    yield takeEvery('SAGA_POST_FAV', addFav);
    yield takeEvery('SAGA_PUT_CAT', updateCategoryOfFavorite);
    yield takeEvery('SAGA_SEARCH', searchGif);
}

// Reducers

const favorites = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return [action.payload];
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

const searchResults = (state=[], action)=> {
    switch(action.type) {
        case 'SET_SEARCH_RESULTS':
            return action.payload;
    }
    return state;
}


const store = createStore(
    combineReducers({ 
        favorites, 
        catagories,
        searchResults 
    }),
    applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
