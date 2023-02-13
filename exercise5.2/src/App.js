import './App.css';
import Card from './components/Card'

function App() {

  const descriptions = ["Random Description 1", "Random Description 2", "Random Description 3"];
  const images = ["img1", "img2", "img3"];
  const titles = ["Some Text 1", "Some Text 2", "Some Text 3"]

  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <Card images={images[0]} title={titles[0]} description={descriptions[0]}></Card>
          <Card images={images[1]} title={titles[1]} description={descriptions[1]}></Card>
          <Card images={images[2]} title={titles[2]} description={descriptions[2]}></Card>
        </div>

      </header>
    </div>
  );
}

export default App;
