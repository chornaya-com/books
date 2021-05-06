import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {booksReducer} from './books/reducer';

const reducers = {
    booksState: booksReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk)),
);
