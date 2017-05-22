import {combineReducers} from 'redux';
import BoxReducer from './boxReducer';

const rootReducer = combineReducers({

   food: BoxReducer

});

export default rootReducer;
