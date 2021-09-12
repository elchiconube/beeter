import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from "./Auth/reducers/auth";
import app from "./reducers/app";
import httpClientMiddleware from "./interceptors/config";
import { createCancellationMiddleware } from "./interceptors/cancelMiddleware";

const reducers = combineReducers({
  app,
  auth,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, createCancellationMiddleware()),
    applyMiddleware(thunk, httpClientMiddleware()),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

export default store;
