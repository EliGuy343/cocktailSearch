
import './App.css';
import DrinkMenu from './components/drinkMenu/DrinkMenu';
import Searchbar from './components/searchbar/Searchbar';
import DrinkState from './context/drinkContext/DrinkState';
function App() {
  return (
    <DrinkState>
      <div className="App">
      <Searchbar/>
      <DrinkMenu/>
      </div>
    </DrinkState>
  );
}

export default App;
