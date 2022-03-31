import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//actions
import { getPhonesAction } from '../actions'
//components
import { Phone } from './Phone'

export const ListProducts = () => {
    const phones = useSelector(state => state.phones)
    const myCart = useSelector(state => state.myCart)
    const dispatch = useDispatch()

    const getInitialData = async() => {
        try {
            dispatch(getPhonesAction())
        } catch(e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        getInitialData()
    },[])

    return (
        <section>
            {
                phones.length
                    ? phones.map(phone => (
                        <Phone
                            key={phone.brand}
                            id={ phone.id }
                            brand={ phone.brand}
                            price={ phone.price}
                            image={phone.image}
                        />
                    ))
                    : <h2>Loading...</h2>
            }
        </section>
    )
}
