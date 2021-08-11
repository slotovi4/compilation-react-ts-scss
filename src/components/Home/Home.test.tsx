import Home from './Home';

import React from 'react';
import ReactDOM from 'react-dom';

describe('Test Home component', () => {
	it('Renders without crashing', () => {
		const app = document.createElement('div');

		ReactDOM.render(<Home />, app);
	});
});
