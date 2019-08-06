import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/walmir35')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setName(response.data.name);
    });
  });

  return (
    <div className="App">
      <h1>API GITHUB USER {name}</h1>
    </div>
  );
}

export default App;
