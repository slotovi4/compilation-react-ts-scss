import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomeContainer } from 'src/containers';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeContainer />} />
			</Routes>
		</BrowserRouter>
	);
};
