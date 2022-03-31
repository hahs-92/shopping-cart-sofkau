import { useSelector } from 'react-redux'
//components
import { MyCart } from './MyCart'
//styles
import style from '../styles/components/myCartContainer.module.css'


export const MyCartContainer = ({isShow}) => {
    const myCart = useSelector(state => state.myCart)

    return (
        <section className={`${ !isShow ? style.MyCartContainer : style.isShow }`}>
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
                    : <h2>Add a phone to your cart</h2>
            }
        </section>
    )
}
