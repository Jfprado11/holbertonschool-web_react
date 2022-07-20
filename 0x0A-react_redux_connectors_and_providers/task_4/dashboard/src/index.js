import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';

const composeAll = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhacer = composeAll(applyMiddleware(thunk));

const store = createStore(rootReducer, composeEnhacer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
