import { SET_NEW_OBJ, UPDATE_OBJ, DELETE_OBJ } from './types';

const setNewObj = ({ tempFood, tempIngr, tempURL }) => {
    return {
        type: SET_NEW_OBJ,
        payload: { tempFood, tempIngr, tempURL }
    }
}

const updateObj = ({tempKey, tempFood, tempIngr, tempURL}) => {
    return {
        type: UPDATE_OBJ,
        payload: {tempKey, tempFood, tempIngr, tempURL}
    }
}

const deleteObj = (tempKey) => {
    return {
        type: DELETE_OBJ,
        payload: tempKey
    }
}

export const actionCreators = {
  setNewObj,
  updateObj,
  deleteObj
}
