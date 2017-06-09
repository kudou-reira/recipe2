import {
  SET_OBJ

} from '../actions/types';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case SET_OBJ:
      const newFoodItem = {
        key: state.length + 1,
        food: action.payload.food,
        ingredients: action.payload.ingredients
      }
      return [...state, newFoodItem];

    default:
      return state;

  }


};
