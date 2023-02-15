import './App.css';
import CustomBtn from './components/CustomBtn'
import { useState } from "react";


function App() {
  const colors = ["blue", "red", "yellow"];

  const [color, setColor] = useState('');

  const selectedColorHandler = (selectedColor) => {
    setColor(selectedColor);
  }

  return (
    <div className="App">
      <header className="App-header">
        {colors.map((color) => {
          return <CustomBtn
            key={color}
            className={color}
            color={color}
            onSelectedColor={selectedColorHandler}>
          </CustomBtn>
        })}
        <h3>Selected Color Is: {color}</h3>
      </header>
    </div>
  );
}

export default App;
