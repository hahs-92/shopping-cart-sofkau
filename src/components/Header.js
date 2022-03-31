import { useSelector } from "react-redux"

export const Header = () => {
    const myCart = useSelector(state => state.myCart)

    return (
        <header>
            <section>
                <h1>Shopping Cart</h1>
            </section>
            <section>
                <span>{ myCart.length }</span>
            </section>
        </header>
    )
}
