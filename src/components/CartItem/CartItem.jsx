import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

const cart = () => {

    const{cart, clearCart, removeItem, getTotal}=useContext(CartContext)

    const order = {
        items: cart.map(product => (
            {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.quantity
            }
        ))
    }

    return cart.length > 0 ? (
        <div className="cartContainer">
            {
                cart.map((c)=>(
                    <div key = {c.id} className="cartItems">
                        <img src= {c.img} alt={c.description} />
                        <h6>{c.title}</h6>
                        <span>{c.quantity}</span>
                        <span>{c.price}</span>
                        <button onClick={()=>removeItem(c.id)}>-</button>
                    </div>
                ))
            }
            <h2>Total: {getTotal()}</h2>
            <div className="buttonsContainer">
                <Link to="/checkout" className="button">Finalizar compra</Link>
                <button className="button" onClick={()=>clearCart()}>Borrar carrito</button>
            </div>
        </div>
    ) : (
        <div className="cartContainer">
            <h1>No hay productos seleccionados</h1>
            <Link to="/" className="button">Seguir comprando</Link>
        </div>
    )
}

export default CartItem 