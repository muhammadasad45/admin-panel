import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {reducers} from "./reducer";
// Store the React application in the DOM.

const store = createStore(reducers, {}, compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
  <App />
</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


