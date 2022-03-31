import { useSelector } from "react-redux"
//styles
import style from '../styles/components/header.module.css'
//assets
import icon from '../assets/phone-call.png'
import cartIcon from '../assets/shopping-cart.png'

export const Header = ({setIsShow, isShow}) => {
    const myCart = useSelector(state => state.myCart)

    const handle = () => {
        console.log("click")
    }

    return (
        <header className={style.Header}>
            <section className={ style.Icon }>
                <img src={icon} alt="icon" />
            </section>
            <section className={ style.Cart }>
                <img
                    src={ cartIcon}
                    alt="cartShopping"
                    onClick={() => setIsShow(!isShow)}
                />
                <span>{ myCart.length }</span>
            </section>
        </header>
    )
}
