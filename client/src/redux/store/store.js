import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import tickersTableReducer from "../reducers/tickersTableReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    tickersTable: tickersTableReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;