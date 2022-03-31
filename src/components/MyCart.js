import { useDispatch } from 'react-redux'
//actions
import { removeToCart } from '../actions'
//style
import style from '../styles/components/myCart.module.css'

export const MyCart = ({id, brand, price, image}) => {
  const dispatch = useDispatch()

  return (
    <article className={ style.MyCart }>
      <section className={ style.Image }>
        <img src={image} alt={brand} />
      </section>
      <section className={ style.Content }>
        <h3>{ brand }</h3>
      </section>
      <section className={ style.Button }>
        <button onClick={() => dispatch(removeToCart({id,brand, price, image}))}>
          Remove
        </button>
      </section>
    </article>
  )
}
