import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';

const middlewareEnhancer = applyMiddleware(thunk);

const store = createStore(uiReducer, middlewareEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
