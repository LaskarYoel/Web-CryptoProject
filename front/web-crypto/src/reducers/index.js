//store
import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer"
import {reducer as formReducer } from 'redux-form'
import favorisReducer from "./favorisReducer"
                               

export default combineReducers({
  cryptos: cryptosReducer,
  favoris: favorisReducer,
  form: formReducer
});