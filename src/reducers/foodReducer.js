import {
  SET_NEW_OBJ,
  UPDATE_OBJ,
  DELETE_OBJ
} from '../actions/types';
import _ from 'lodash';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

      case SET_NEW_OBJ:
        const newFoodItem = {
          key: state.length,
          food: action.payload.tempFood,
          ingredients: action.payload.tempIngr,
          url: action.payload.tempURL
        }
        return [...state, newFoodItem];

      case UPDATE_OBJ:
        // we cannot directly mutate the state, so make a deep clone of it and return that
        const food = _.cloneDeep(state)
        const { tempKey, tempFood, tempIngr, tempURL } = action.payload
        food[tempKey] = { key: tempKey, food: tempFood, ingredients: tempIngr, url: tempURL }
        console.log(food)
        return food
            
      case DELETE_OBJ:
        const newFood = [
                            ...state.slice(0, action.payload), 
                            ...state.slice(action.payload + 1)
                        ]
        const resetIdxFood = newFood.map((item, index) => {
            item.key = index;
            return item;
        });
        return newFood
            
      default:
        return state;
    }

};
