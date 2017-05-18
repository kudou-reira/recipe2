import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//import ReduxPromise from 'redux-promise';


import FoodList from './components/food_list';

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

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStore(reducers);

ReactDOM.render(
        <Provider store={store}>
            <App /> 
        </Provider>
    , document.querySelector('.container'));

/*
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App /> 
    </Provider>
    , document.querySelector('.container'));
*/
