import {combineReducers} from 'redux';
import FoodReducer from './FoodReducer';

const rootReducer = combineReducers({

   food: FoodReducer

});

export default rootReducer;
