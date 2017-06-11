import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import FoodList from './components/foodList';
import { createLogger }  from 'redux-logger';
const logger = createLogger({ collapsed: true })

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <div>
      {/* Why not a header tag? */}
      <h3 className="recipeTitle">
        Recipe List!
      </h3>
      <FoodList />
    </div>
  );
}



ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.container'));
