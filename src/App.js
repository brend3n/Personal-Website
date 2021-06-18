import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

var counter_val = 0;
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        <Counter/>
      </p> 
      </header>
    </div>
  );
}

export default App;
