import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux"
//actions
import { addToCart } from '../actions'

export const Phone = ({id, brand, price, image }) => {
  const dispatch = useDispatch()
  const [{isDragging}, drag] = useDrag(() => ({
    type: "article",
    item: {id: id, brand: brand, price: price },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))


  const handleOnCLick = () => {
    dispatch(addToCart({
      id: id,
      brand: brand,
      price: price
    }))
  }


  return (

    <article ref={drag} >
      <section>
        <img src={image} alt={brand} />
      </section>
      <section>
        <h2>{brand}</h2>
        <p>{price}</p>
      </section>
      <button
        onClick={handleOnCLick}
      >Add to cart
      </button>
    </article>
  )
}
