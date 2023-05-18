import cart from './assets/cart-shopping-solid.svg'
import './CartWidget.css'
const CartWidget = () => {
    return(
        <div className="cart-widget">
            <img className="cart-widget__icon" src={cart} alt="cart-widget"/>
            <p className="cart-widget__icon cart-widget__total-shopping">1</p>
        </div>
    )
}

export default CartWidget