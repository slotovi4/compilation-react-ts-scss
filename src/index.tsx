import App from './app';
import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
