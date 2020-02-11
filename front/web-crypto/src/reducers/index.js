//store
import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer"
import {reducer as formReducer } from 'redux-form'

export default combineReducers({
  cryptos: cryptosReducer,
  form: formReducer
});