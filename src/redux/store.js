import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState';
import foilsReducer from './foilsReducer';
import ordersReducer from './ordersReducer';


// define reducers
const reducers = {
  foils: foilsReducer,
  orders: ordersReducer
};

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )  
);