import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/BaseApp/App';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/BaseFront/NavBar';
import TableCategories from'./components/BaseFront/TableCategories';
import Articles from './components/BaseFront/Articles';
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(

  <BrowserRouter>
  <Provider store={store}>
      <App/>
  </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
