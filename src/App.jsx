import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContaier from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path= "/" element={<ItemListContaier greeting={"Todos nuestros productos"}/>}/>
            <Route path= "/category/:categoryId" element={<ItemListContaier greeting={"Productos por categoria"}/>}/>
            <Route path= "/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart />} />
            <Route path= "*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
