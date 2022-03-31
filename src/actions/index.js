//types
import { cartTypes } from '../types'
//helpers
import { getPhones } from '../helpers/getData'



export const getPhonesAction = () => async(dispatch) => {

    const phones = await getPhones()

    dispatch({
        type: cartTypes.GET_PHONES,
        payload: phones
    })
}

export const addToCart = (phone) => async(dispatch) => {

    dispatch({
        type: cartTypes.ADD_TO_CART,
        payload: phone
    })
}

export const removeToCart = (phone) => async(dispatch) => {

    dispatch({
        type: cartTypes.REMOVE_TO_CART,
        payload: phone
    })
}