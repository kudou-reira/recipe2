import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import FoodList from './components/foodList';

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

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.container'));
