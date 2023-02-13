import './App.css';
import Button from './components/Button'

function App() {
  const titleBtn1 = "Important";
  const titleBtn2 = "Not Important";
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Button className="bold" title={titleBtn1}></Button>
          <Button title={titleBtn2} />
        </div>
      </header>
    </div>
  );
}

export default App;
