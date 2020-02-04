import { GET_CRYPTOS } from "./type"
import {UPDATE_FAVORIS} from "./type"

// stock toutes les actions (fonctions)


export const getCryptos = () => async dispatch =>{

  //  const response = // Api Request

  const data = [
    { id: 1 ,name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %',favorite: 1 },
    { id: 2 ,name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' ,favorite:0 },
    { id: 3 ,name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %',favorite:0  },
    { id: 4 ,name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %',favorite:0  },
    { id: 5 ,name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' ,favorite:1 },
    { id: 6 ,name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' ,favorite:1 },
    { id: 7 ,name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %',favorite:0  },
    { id: 8 ,name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' ,favorite:0 },
    { id: 9 ,name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' ,favorite:0 },
    { id: 10 ,name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' ,favorite:0 },
  ]

  dispatch({type: GET_CRYPTOS, payload: data})

}

export const updateFavoris = (table)=> async dispatch =>{
// axios with id
//  state.cryptos[Id].favorite= !state.cryptos[Id].favorite
 dispatch({type: UPDATE_FAVORIS, payload: table})
}
  