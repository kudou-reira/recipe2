import {
  FOOD_CHANGE,
  INGR_CHANGE,
  NEW_FOOD,
  NEW_INGR,
  SET_FOOD,
  SET_INGR,
  ADD_FOOD,
  ADD_INGR
} from '../actions/types';

import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
      
      default:
        return state;

    }


};
