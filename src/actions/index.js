import {SET_NEW_OBJ, UPDATE_OBJ} from './types';


export const setNewObj = ({tempFood, tempIngr}) => {

    return {
        type: SET_NEW_OBJ,
        payload: {tempFood, tempIngr}
    }
}

export const updateObj = ({tempKey, tempFood, tempIngr}) => {

    return {
        type: UPDATE_OBJ,
        payload: {tempKey, tempFood, tempIngr}
    }
}
