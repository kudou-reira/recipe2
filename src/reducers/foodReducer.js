import {
  SET_NEW_OBJ,
  UPDATE_OBJ
} from '../actions/types';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

      case SET_NEW_OBJ:
        const newFoodItem = {
          key: state.length + 1,
          food: action.payload.food,
          ingredients: action.payload.ingredients
        }
        return [...state, newFoodItem];

      case UPDATE_OBJ:
        return [...state, {food: action.payload.food, ingredients: action.payload.ingredients}]

      default:
        return state;

    }

};
