import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { AppRoutes } from './AppRoutes';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { StrictMode } from 'react';

const App = () => (
	<StrictMode>
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	</StrictMode>
);

render(<App />, document.getElementById('root'));

registerServiceWorker();
