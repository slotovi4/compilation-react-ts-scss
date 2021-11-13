import './index.scss';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';

render(<App />, document.getElementById('root'));
registerServiceWorker();
