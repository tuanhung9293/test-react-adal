import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Root } from './containers';
import { routes } from './routes';

ReactDOM.render(<Root routes={routes} />, document.getElementById('root'));
registerServiceWorker();
