import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import { store, persistor } from './store';

// Font Awesome 5 (CSS)
const fa = document.createElement('link');
fa.rel = 'stylesheet';
fa.href = 'https://use.fontawesome.com/releases/v5.9.0/css/all.css';
document.getElementsByTagName('head')[0].appendChild(fa);


// Inject
const viewport = document.body;
const app = document.createElement('div');
app.id = 'root';
if (viewport) viewport.appendChild(app);
console.log('lor-panel injected');


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
