import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContaier from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContaier greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log ("Cantidad agregada", quantity)} />
    </div>
  );
}

export default App;
