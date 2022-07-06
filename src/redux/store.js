import { createStore, applyMiddleware, compose } from "redux";

import rootreducer from "./reducers/index";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootreducer,
    applyMiddleware(ReduxThunk)
    // composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
