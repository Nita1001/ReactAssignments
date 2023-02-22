import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Card from './components/Card'
import './App.css';

function App() {

  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/?inc=gender,name,picture&results=10')
      setAvatars(res.data.results);
    } catch (err) {
      console.log('Status:', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          {avatars.map((avatar, index) => (
            <Card key={index} image={avatar.picture.large} title={avatar.name.first + " " + avatar.name.last} description={avatar.gender} />
          ))}
          
        </div>
      </header>
    </div>
  );
}

export default App;