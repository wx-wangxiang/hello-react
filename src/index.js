import React from 'react';
import ReactDOM from 'react-dom';
import NewsApp from './news-app';
import rem from './utils/rem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewsApp />, document.getElementById('root'));
rem();
registerServiceWorker();
