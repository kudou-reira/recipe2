import {
  SET_NEW_OBJ,
  UPDATE_OBJ
} from '../actions/types';
import _ from 'lodash';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

      case SET_NEW_OBJ:
        const newFoodItem = {
          key: state.length + 1,
          food: action.payload.tempFood,
          ingredients: action.payload.tempIngr
        }
        return [...state, newFoodItem];

      case UPDATE_OBJ:
        // we cannot directly mutate the state, so make a deep clone of it and return that
        const food = _.cloneDeep(state)
        const { tempKey, tempFood, tempIngr } = action.payload
        food[tempKey] = { key: tempKey, food: tempFood, ingredients: tempIngr }
        return food
      default:
        return state;
    }

};
