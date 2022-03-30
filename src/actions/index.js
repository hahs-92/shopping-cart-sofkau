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