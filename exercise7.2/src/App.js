import './App.css';
import CheckBox from './components/CheckBox'
import { useState } from "react";


function App() {
  const labels = [
    'I read the term of the app',
    'I accept the term of the app',
    'I want to get weekly news letter',
    'I want to get sales and offers'
  ];

  const labelsToState = new Array(labels.length).fill(true, 2);
  const [checked, setChecked] = useState(labelsToState);

  const selectedHandler = (position) => {
    const updateCheckedState = checked.map((box, index) => {
      return (index === position) ? !(box) : box;
    });
    setChecked(updateCheckedState);
  };

  return (
    <div className="App">
      <header className="App-header">

        {labels.map((label, index) => {
          return (
            <CheckBox
              type="checkbox"
              key={label}
              id={index}
              label={label}
              checked={checked[index]}
              onChange={() => selectedHandler(index)}
            ></CheckBox>
          )
        })}

      </header>
    </div>
  );
}

export default App;
