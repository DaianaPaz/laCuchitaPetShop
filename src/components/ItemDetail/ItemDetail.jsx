import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, price, stock, description}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt= {name} className="ItemImg" width="150" height="200"/>
            </picture>
            <section>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log("Cantidad agregada: $",quantity )}/>
            </footer>
            </article>               
    )
}

export default ItemDetail