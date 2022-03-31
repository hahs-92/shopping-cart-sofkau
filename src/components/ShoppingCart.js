import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
//actions
import { addToCart } from '../actions'
//components
import { Phone } from './Phone'
//styles
import style from '../styles/components/shoppingCart.module.css'

export const ShoppingCart = () => {
    const dispatch = useDispatch()
    const myCart = useSelector(state => state.myCart)

    const [{isOver}, drop] = useDrop(() => ({
        accept: "article",
        drop: (item) => dispatch(addToCart(item)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
          })
    }))


    return (
        <section ref={drop} className={ style.ShoppingCart }>
            {
                myCart.length && myCart.map(phone => (
                    <Phone
                        key={phone.id}
                        id={phone.id}
                        brand={phone.brand}
                        price={phone.price}
                        image={ phone.image }
                    />
                ))
            }
        </section>
    )
}
