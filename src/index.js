import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Main from './components/mainList';
import { createLogger }  from 'redux-logger';
import { loadState, saveState } from './lib/localStorage';
import fakeData from './lib/initialData';

const logger = createLogger({ collapsed: true })


const persistedState = loadState();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
//const store = createStoreWithMiddleware(reducers,
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
    reducers,
    persistedState
);

store.subscribe(() => {
    saveState(store.getState());
});

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
}



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('.container')
);
