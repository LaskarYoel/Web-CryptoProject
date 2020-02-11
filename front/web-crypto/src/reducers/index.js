//store
import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer"
import favorisReducer from "./favorisReducer"

export default combineReducers({
  cryptos: cryptosReducer,
  favoris: favorisReducer,
  
});