import logo from './logo.svg';
import './App.css';

function App() {

  const data = ["Hello", "World"];
  const [hello, world] = data;

  const number1 = 5;
  const number2 = 6;
  const result = [number1 + number2];

  const string = "I love React!";

  return (
    <div className="App">
      <header className="App-header">
        <h3>{hello} {world}</h3>
        <p>{number1} + {number2} = {result}</p>
        <p>The string's length is {string.length}</p>
      </header>
    </div>
  );
}

export default App;
