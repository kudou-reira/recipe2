import {SET_NEW_OBJ, UPDATE_OBJ} from './types';


export const setNewObj = ({food, ingredients}) => {

    return {
        type: SET_NEW_OBJ,
        payload: {food, ingredients}
    }
}

export const updateObj = ({food, ingredients}) => {

    return {
        type: UPDATE_OBJ,
        payload: {food, ingredients}
    }
}



