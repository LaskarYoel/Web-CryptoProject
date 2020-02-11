import { GET_CRYPTOS } from "./type";
import { UPDATE_FAVORIS } from "./type";
import { GET_FAVORIS} from "./type";
import axios from "axios";
// stock toutes les actions (fonctions)

export const getCryptos = () => async dispatch => {
  //  const response = // Api Request
  const response = await axios.get(`http://127.0.0.1:5000/cryptos`);
  console.log(response.data);

  dispatch({ type: GET_CRYPTOS, payload: response.data });
};

export const updateFavoris = (crypto,add,id) => async dispatch => {
  // axios with id
  //  state.cryptos[Id].favorite= !state.cryptos[Id].favorite

  console.log(crypto.FROMSYMBOL)
  console.log(add)

  const fav = {favorite: crypto.FROMSYMBOL, add: add  }
  // console.log({favorite: crypto.FROMSYMBOL, add: add  })

  // axios.post(`https://jsonplaceholder.typicode.com/users/`+id,  table.fromsymbol )
  axios.post(`https://jsonplaceholder.typicode.com/users`, { fav })
  .then(res => {
    console.log(res);
    console.log(res.data);
  })

  dispatch({ type: UPDATE_FAVORIS, payload: crypto });
};

export const getFavoris = id => async dispatch => {
  //  const response = // Api Request
  const response = await axios.get(`http://127.0.0.1:5000/favoris/`+id);
  console.log(response.data);

  dispatch({ type: GET_FAVORIS, payload: response.data });
};

