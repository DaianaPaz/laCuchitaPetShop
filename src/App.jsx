import './App.css';
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContaier from './components/NavBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContaier greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
