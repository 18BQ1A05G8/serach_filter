import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';

function filtering(txt) {}

function App() {
	var data = require('./MOCK_DATA.json');
	const [ input, setInput ] = useState('');
	return (
		<div className="App">
			<div>
				<input
					type="text"
					placeholder="Search.."
					onChange={(event) => setInput(event.target.value.toLowerCase())}
				/>
			</div>
			<div>
				<ul className="topRow">
					<li>ID</li>
					<li>First Name</li>
					<li>Last Name</li>
					<li>Email</li>
				</ul>
				{data
					.filter((d) => {
						if (input === '') return d;
						else if (
							d.first_name.toLowerCase().includes(input) ||
							d.last_name.toLowerCase().includes(input) ||
							d.email.toLowerCase().includes(input) ||
							d.id.toString()===(input)
						)
							return d;
					})
					.map((val, key) => {
						return (
							<ul>
								<li>{val.id}</li>
								<li>{val.first_name}</li>
								<li>{val.last_name}</li>
								<li>{val.email}</li>
							</ul>
						);
					})}
			</div>
		</div>
	);
}

export default App;
