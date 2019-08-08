import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.svg';
import api from '../services/api';

function Login ({ history }) {

	const [username, setUsername] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		
		const response  = await api.post('/devs', {
			username,
		});

		const { _id } = response.data;

		console.log(_id);

		history.push(`/dev/${_id}`);
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<img src={logo} alt="Tindev" />	
				<input 
				 type="text" 
				 placeholder="Usuario Git"
				 value={username}
				 onChange={e => setUsername(e.target.value)}
				  />
				<button>ENTRAR</button>
			</form>
			
		</div>
	)
}

export default Login;