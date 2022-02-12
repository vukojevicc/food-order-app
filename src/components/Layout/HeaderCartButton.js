import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.scss'

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

    const cartContext   = useContext(CartContext)
    const { items } = cartContext // Object destructuring: pulling properties from objects

    const numberOfCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)

    const btnClasses = `${styles.button} ${btnIsHighlighted && styles.bump}`

    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 200);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton