import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomeContainer } from 'src/containers';
import { store } from 'src/redux/store';
import { StrictMode } from 'react';

const App = () => (
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeContainer />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

export default App;
