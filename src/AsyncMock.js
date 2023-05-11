

const products = [

    {
        id: "1",
        name: "Royal Canin (perro)",
        price: 17711,
        img: "/assets/perro.png",
        stock: 20,
        description: "Alimento Royal Canin Size Health Nutrition Maxi Adult para perro adulto de raza grande sabor mix en bolsa de 15 kg"
    },

    {
        id: "2",
        name: "Royal Canin (gato)",
        price: 14600,
        img: "/assets/gato.png",
        stock: 15,
        description: "Alimento Royal Canin Feline Health Nutrition Fit para gato adulto sabor mix en bolsa de 7.5 kg"
    },

    {
        id: "3",
        name: "Pelota de goma",
        price: 1279,
        img: "/assets/pelota.png",
        stock: 30,
        description: "Pelota De Goma Tpr Limpia Dientes Para Perro 6 Cm"
    },

    {
        id: "4",
        name: "Dispenser alimento",
        price: 1034,
        img: "/assets/dispenser.png",
        stock: 30,
        description: "Juguete Dispenser Alimento Gatos Snack Shaking Mascotas"
    },

    {
        id: "5",
        name: "Polar",
        price: 1499,
        img: "/assets/abrigo.png",
        stock: 50,
        description: "Polar Para Mascotas Muy Abrigados Varios Colores"
    },

    {
        id: "6",
        name: "Buzo",
        price: 2450,
        img: "/assets/buzos.png",
        stock: 50,
        description: "Buzo Para Perros Gatos Frisado Con Dibujos Animados Mascotas"
    },

    {
        id: "7",
        name: "Cama",
        price: 3000,
        img: "/assets/cama.png",
        stock: 30,
        description: "Moises Cuna Camita Cucha + Colchón Mascotas Perro Gato 35x45"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)        
    })    
}

export const getProductsByCategory=(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


