//store
import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer"
import {reducer as formReducer } from 'redux-form'
import favorisReducer from "./favorisReducer"
import deleteCryptosReducer from "./deleteCryptosReducer"
                               

export default combineReducers({
  cryptos: cryptosReducer,
  favoris: favorisReducer,
  deleteCryptos: deleteCryptosReducer,
  form: formReducer
});