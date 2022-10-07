import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem"



const Cart = () => {
    const totalPrice = useSelector (getTotalPrice);
    const cartItems = useSelector(getCartItems)
    return (
        <div>
            <img className="cartIcon" src="https://cdn-icons-png.flaticon.com/512/49/49814.png?w=740&t=st=1665151657~exp=1665152257~hmac=0f08b978edaecccce6cba3e457482f3f20944372c742e09941fac6936c19eb76" alt ="cartItem"/> 
            <h3>TOTAL: ${totalPrice}</h3>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/> )}
        </div>
    )
}
export default Cart