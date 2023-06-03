import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, getTotal} = useContext(CartContext)

    console.log(cart)

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.length == 0 ? 
            <h1>Carrito vacío</h1> 
            : 
            <>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
            </>}
            
        </div>
    )
}

export default Cart