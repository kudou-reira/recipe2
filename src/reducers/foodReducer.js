import {
  SET_OBJ

} from '../actions/types';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
      
      case SET_OBJ:
            return [...state, food: action.payload, ingredients: action.payload];
            
      default:
        return state;

    }


};
