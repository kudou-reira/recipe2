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
        var hold = state;
        var replace = function (arr, key, update){
            var index = _.indexOf(arr, _.find(arr, key));
            arr.splice(index, 1, update);
        }
        replace(hold, {key: action.payload.tempKey}, {key: action.payload.tempKey, food: action.payload.tempFood, ingredients: action.payload.tempIngr})
        return hold;

      default:
        return state;
    }

};
