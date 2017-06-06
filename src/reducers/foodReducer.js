import {
  FOOD_CHANGE,
  INGR_CHANGE,
  SET_OBJ

} from '../actions/types';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
      
      case FOOD_CHANGE:
            return {...state, food: action.payload};
    
      case INGR_CHANGE:
            return {...state, ingredients: action.payload};
      
      case SET_OBJ:
            return {...state, food: action.payload.food, ingredients: action.payload.ingredients};
            
      default:
        return state;

    }


};
