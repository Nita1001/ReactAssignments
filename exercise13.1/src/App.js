import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [favoriteColor, setColor] = useState('White');
  const [classes, setClass] = useState('');
  useEffect(()=>{

    setTimeout(()=>{
      setColor('Blue');
      setClass('blue')
    }, 1000)

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1>My favorite color is <span className={classes}>{favoriteColor}</span></h1>
        </div>
      </header>
    </div>
  );
}

export default App;
