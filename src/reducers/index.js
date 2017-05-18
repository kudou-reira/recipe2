import {combineReducers} from 'redux';
import BoxReducer from './boxReducer';

const rootReducer = combineReducers({
    
   box: BoxReducer
    
});

export default rootReducer;