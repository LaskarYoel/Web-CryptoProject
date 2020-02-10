import { GET_CRYPTOS } from "./type";
import { UPDATE_FAVORIS } from "./type";
import axios from "axios";
// stock toutes les actions (fonctions)

export const getCryptos = () => async dispatch => {
  //  const response = // Api Request
  const response = await axios.get(`http://127.0.0.1:5000/cryptos`);
  console.log(response.data);

  dispatch({ type: GET_CRYPTOS, payload: response.data });
};

export const updateFavoris = table => async dispatch => {
  // axios with id
  //  state.cryptos[Id].favorite= !state.cryptos[Id].favorite
  dispatch({ type: UPDATE_FAVORIS, payload: table });
};
