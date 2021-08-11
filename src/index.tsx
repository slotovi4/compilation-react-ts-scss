import App from './app';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';

import './index.scss';

render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
