//types
import { cartTypes } from '../types'

const INITIAL_STATE = {
    phones: [],
    myCart: []
}

export const shoppingCartReducer = (state=INITIAL_STATE, action)  => {
    switch (action.type) {
        case cartTypes.GET_PHONES:
            return {
                ...state,
                phones: action.payload
            }
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                phones: state.phones.filter(phone => phone.id !== action.payload.id),
                myCart: state.myCart.concat(action.payload)
            }
        case cartTypes.REMOVE_TO_CART:
            console.log("redux: ", action.payload)
            return {
                ...state,
                phones: state.phones.concat(action.payload),
                myCart: state.myCart.filter(
                    phone => phone.id !== action.payload.id
                )
            }

        default:
            return state
    }
}