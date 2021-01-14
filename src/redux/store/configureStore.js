import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../Reducers';

let middleware = applyMiddleware(thunk);

const combinedReducers = combineReducers(Reducers);

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if (compose) {
  middleware = compose(middleware);
}

export default function store(initialState = {}) {
  return createStore(combinedReducers, initialState, middleware);
}
