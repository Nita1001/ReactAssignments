import { useRef } from 'react';

import img1 from './Assets/cuteDragon.jpg'
import img2 from './Assets/spookyTreesIllustration.jpg'

import Img from './components/Img'
import './App.css';



function App() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const colorManager = (image) => {

    switch (image) {
      case 1:
        img1Ref.current.className = '';
        break;
      case 2:
        img1Ref.current.className = 'blackAndWhite';
        break;
      case 3:
        img2Ref.current.className = '';
        break;
      case 4:
        img2Ref.current.className = 'blackAndWhite';
        break;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <Img ref={img1Ref} src={img2} className='' mouseOver={() => { colorManager(1) }} mouseLeave={() => { colorManager(2) }} />
          <Img ref={img2Ref} src={img1} className='' mouseOver={() => { colorManager(3) }} mouseLeave={() => { colorManager(4) }} />
        </div>
      </header>
    </div>
  );
}

export default App;
