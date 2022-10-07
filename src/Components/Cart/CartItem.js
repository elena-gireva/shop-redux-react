import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishID);
    const dispatch = useDispatch();

    return (
        <div className="content"> 
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} position(s)</p>
            <p>price: ${dishes.price * cartItem.quantity}</p>
            <span onClick={()=> dispatch(removeItemFromCart({cartItemID: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt ='removeItem'/> 
            </span>
            
        </div>
    )
}
export default CartItem;