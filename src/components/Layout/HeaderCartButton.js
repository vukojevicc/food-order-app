import { useContext } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.scss'

const HeaderCartButton = props => {
    const cartContext   = useContext(CartContext)
    const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton