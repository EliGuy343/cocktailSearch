
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import DrinkState from './context/drinkContext/DrinkState';
function App() {
  return (
    <DrinkState>
      <div className="App">
      <Searchbar/>
      </div>
    </DrinkState>
  );
}

export default App;
