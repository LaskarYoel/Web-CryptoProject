//gestions des actions Cryptos
import { GET_CRYPTOS } from "../actions/type"
import {UPDATE_FAVORIS} from "../actions/type"

export default (state= [], action={}) =>{
    switch (action.type){
        case GET_CRYPTOS:
            return action.payload
        case UPDATE_FAVORIS:
            return action.payload
            
        //     [
                
        //         ...state[action.payload],  !state[action.payload].favorite: true
        // ]
            
            // state[action.payload].favorite=!state[action.payload].favorite
        default: 
            return state
    }
}