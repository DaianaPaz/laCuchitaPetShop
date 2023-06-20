import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

import {getDocs, collection, query, where } from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"

const ItemListContaier = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true)

    const {category}=useParams()

    useEffect( () => {
        setLoading(true)

        const collectionRef = category
            ? query(collection(db, "products"), where("category", "==", category))
            : collection(db, "products")
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data= doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })    
    },[category]  
    )

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContaier