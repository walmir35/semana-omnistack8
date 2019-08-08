import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [location, setLocation] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/walmir35')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setName(response.data.name);
      setLogin(response.data.login);
      setLocation(response.data.location);
      setAvatar(response.data.avatar_url);
    });
  });

  return (
    <div className='App'>
      <h3>User {name} - {login} - {location}</h3><br />
      <img alt='' width='260' height='260' 
      className='avatar width-full height-full avatar-before-user-status' 
      src={avatar} />
    </div>
  );
}

export default App;
