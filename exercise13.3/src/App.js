import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('');
  const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];
  const colorRef = useRef(color);
  const currentColor = counter > 5 ? 'circle' : colorRef.current;

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 5) {
          setCounter(prevCounter => prevCounter + 1);
          setColor(`box ${colors[counter]}`);
          colorRef.current = `box ${colors[counter]}`;
      } else {
        colorRef.current = 'circle';
      }
    }, 500);
    return () => clearInterval(interval);
  }, [counter, colors, setColor]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className={`box ${currentColor}`}>

            {counter > 0 && counter <= 5 && (
              <div className="counter">{counter}</div>
            )}

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;