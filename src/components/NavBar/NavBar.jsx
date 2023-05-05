import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>La cuchita Pet Shop</h1>
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Alimentos</button>
            <button type="button" class="btn btn-primary">Accesorios</button>
            <button type="button" class="btn btn-primary">Camas e Indumentaria</button>
            <button type="button" class="btn btn-primary">Contacto</button>
            </div>
            <br /><br />
            <CartWidget />
        </nav>
    )
}

export default NavBar