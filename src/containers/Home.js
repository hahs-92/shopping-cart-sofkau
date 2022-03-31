import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
//components
import { Header } from '../components/Header'
import { ListProducts } from '../components/ListProducts'
import { MyCartContainer } from '../components/MyCartContainer'
import { ShoppingCart } from '../components/ShoppingCart'
//styles
import style from '../styles/pages/home.module.css'


export const Home = () => {
    return (
       <div className={ style.Home }>
            <Header />

            <main className={ style.HomeWrapper }>
                <DndProvider backend={HTML5Backend}>
                    <ListProducts />
                    <ShoppingCart />
                </DndProvider>

                <MyCartContainer />
            </main>
       </div>
    )
}
