import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comment />, document.getElementById('root'));
registerServiceWorker();
