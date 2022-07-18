import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
