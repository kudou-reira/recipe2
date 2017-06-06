import {FOOD_CHANGE, INGR_CHANGE, SET_OBJ} from './types';

export const foodChange = (text) => {

    return {
        type: FOOD_CHANGE,
        payload: text
    }

}

export const ingredientChange = (text) => {

    return {
        type: INGR_CHANGE,
        payload: text
    }

}

export const setObj = ({food, ingredients}) => {

    return {
        type: SET_OBJ,
        payload: text
    }
}

