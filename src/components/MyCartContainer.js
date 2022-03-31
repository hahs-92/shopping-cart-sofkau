import { useSelector } from 'react-redux'
//components
import { MyCart } from './MyCart'
//styles
import style from '../styles/components/myCartContainer.module.css'


export const MyCartContainer = () => {
    const myCart = useSelector(state => state.myCart)

    return (
        <section className={ style.MyCartContainer}>
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
