import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { HomeContainer } from 'src/containers';
import { store, browserHistory } from 'src/redux/store';

const App = React.memo(() => (
	<Provider store={store}>
		<ConnectedRouter history={browserHistory}>
			<Switch>
				<Route path="/" component={HomeContainer} />
			</Switch>
		</ConnectedRouter>
	</Provider>
));

App.displayName = 'App';

export default App;
