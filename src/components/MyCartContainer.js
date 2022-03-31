import { useSelector } from 'react-redux'
//components
import { MyCart } from './MyCart'


export const MyCartContainer = () => {
    const myCart = useSelector(state => state.myCart)

    return (
        <section >
            {
                myCart.length
                    ?
                    myCart.map(phone => (
                            <MyCart
                                key={phone.id }
                                id={ phone.id}
                                brand={phone.brand}
                                price={phone.price}
                                image={phone.image}
                            />
                    ))
                    : <h2>add a phone</h2>
            }
        </section>
    )
}
