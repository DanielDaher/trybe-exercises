import './App.css';
import Pokefile from './pokemons';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokefile pokemons={pokemons} />
      <footer>Made By Daniel Daher</footer>
    </div>
  );
}

export default App;

