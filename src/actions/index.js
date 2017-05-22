import {FOOD_CHANGE, INGR_CHANGE, NEW_FOOD, NEW_INGR, SET_FOOD, SET_INGR, ADD_FOOD, ADD_INGR} from './types';

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

export const newFood = (food, ingredients) => {

    return {
        type: NEW_FOOD,
        payload: text
    }
}

export const newIngr = (text) => {

    return {
        type: NEW_INGR,
        payload: text
    }
}

export const setFood = (text) => {

    return {
        type: SET_FOOD,
        payload: text
    }
}

export const setIngr = (text) => {

    return {
        type: SET_INGR,
        payload: text
    }
}

export const addFood = (text) => {

    return {
        type: ADD_FOOD,
        payload: text
    }
}

export const addIngr = (text) => {

    return {
        type: ADD_INGR,
        payload: text
    }
}
