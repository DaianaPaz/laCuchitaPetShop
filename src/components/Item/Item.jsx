import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock, description}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
            <img src={img} alt={name} className="ItemImg" width="150" height="200" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
                    Descripcion: {description}
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className= "Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item 