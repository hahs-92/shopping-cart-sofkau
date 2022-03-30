import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//actions
import { getPhonesAction } from '../actions'
//components
import { Phone } from './Phone'

export const ListProducts = () => {
    const phones = useSelector(state => state.phones)
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
                            brand={ phone.brand}
                            price={ phone.price}
                            count={ phone.count}
                        />
                    ))
                    : <h2>Loading..,</h2>
            }
        </section>

    )
}
