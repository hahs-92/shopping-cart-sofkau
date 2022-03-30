//types
import { cartTypes } from '../types'

const INITIAL_STATE = {
    phones: []
}

export const shoppingCartReducer = (state=INITIAL_STATE, action)  => {
    switch (action.type) {
        case cartTypes.GET_PHONES:
            return {
                ...state,
                phones: action.payload
            }

        default:
            return state
    }
}