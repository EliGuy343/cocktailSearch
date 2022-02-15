
import './App.css';
import Header from './components/header/Header';
import DrinkState from './context/drinkContext/DrinkState';
function App() {
  return (
    <DrinkState>
      <div className="App">
      <Header/>
      </div>
    </DrinkState>
  );
}

export default App;
