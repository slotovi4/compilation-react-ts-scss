import Home from './Home';

import { render } from 'react-dom';

describe('Test Home component', () => {
	it('Renders without crashing', () => {
		const app = document.createElement('div');
		const onThemeSwitchChange = jest.fn();
		const onLogoClick = jest.fn();
		const sendTestRequest = jest.fn();

		render(
			<Home
				theme={null}
				onThemeSwitchChange={onThemeSwitchChange}
				onLogoClick={onLogoClick}
				sendTestRequest={sendTestRequest}
			/>,
			app
		);
	});
});
