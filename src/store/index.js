import { cacheEnhancer } from "redux-cache";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk),
    cacheEnhancer({log:true})
))