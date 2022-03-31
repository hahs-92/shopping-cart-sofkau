import { useDispatch } from 'react-redux'
//actions
import { removeToCart } from '../actions'


export const MyCart = ({id, brand, price}) => {
  const dispatch = useDispatch()

  return (
    <article>
      <section>
        <h3>{ brand }</h3>
        <span>{ price}</span>
      </section>
      <section>
        <button onClick={() => dispatch(removeToCart({id,brand, price}))}>
          Remove
        </button>
      </section>
    </article>
  )
}
