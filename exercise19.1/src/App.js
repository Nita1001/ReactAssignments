import React from "react";
import Father from "./components/Father";
import './App.css';


export const giftsContext = React.createContext([]);

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <giftsContext.Provider value={"Nintendo Switch"}>
            <Father />
          </giftsContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;