import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

describe('Test Home component', () => {
	it('Renders without crashing', () => {
		const app = document.createElement('div');

		ReactDOM.render(<Home />, app);
	});
});