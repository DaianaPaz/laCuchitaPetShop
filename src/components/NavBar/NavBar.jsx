import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to="/">
                <h3>La cuchita Pet Shop</h3>
            </Link>
            <div className="Categories">
                <NavLink to={"/category/alimentos"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Alimentos</NavLink>
                <NavLink to={"/category/accesorios"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Accesorios</NavLink>
                <NavLink to={"/category/indumentaria"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Camas e Indumentaria</NavLink>
                <NavLink to={"/category/contacto"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Contacto</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar