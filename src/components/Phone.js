import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux"
//actions
import { addToCart } from '../actions'
//styles
import style from '../styles/components/phone.module.css'

export const Phone = ({id, brand, price, image }) => {
  const dispatch = useDispatch()
  const [{isDragging}, drag] = useDrag(() => ({
    type: "article",
    item: {id: id, brand: brand, price: price, image: image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))


  const handleOnCLick = () => {
    dispatch(addToCart({
      id: id,
      brand: brand,
      price: price,
      image: image
    }))
  }


  return (

    <article ref={drag}  className={ style.Phone }>
      <section className={ style.Image }>
        <img src={image} alt={brand} />
      </section>
      <section className={ style.Content }>
        <h2>{brand}</h2>
        <p>${price}</p>
      </section>
      <section  className={ style.Button }>
        <button
          onClick={handleOnCLick}
        >Add to cart
        </button>
      </section>
    </article>
  )
}
