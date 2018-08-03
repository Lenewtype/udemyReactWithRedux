import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyBnEbz1EIzq20YSRStJEbDEs5qW8U1SuCI';


const App = () => {
	return (
		<div>
			Hi!
			<SearchBar/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));