export const Phone = ({brand, price, count}) => {
  return (
    <article>
      <h2>{brand}</h2>
      <p>{price}</p>
      <button>Add to cart</button>
    </article>
  )
}
