import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [classes, setClass] = useState('');
  const [classes1, setClass1] = useState('');
  const [classes2, setClass2] = useState('');
  
  useEffect(() => {

    setTimeout(() => {
      setClass('box b2');
      setClass1('box b1');
      setClass2('box b');
      
    }, 1000)

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className={classes}></div>
          <div className={classes1}></div>
          <div className={classes2}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
