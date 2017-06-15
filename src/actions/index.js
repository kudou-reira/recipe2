import { SET_NEW_OBJ, UPDATE_OBJ } from './types';

const setNewObj = ({ tempFood, tempIngr }) => {
    return {
        type: SET_NEW_OBJ,
        payload: { tempFood, tempIngr }
    }
}

const updateObj = ({tempKey, tempFood, tempIngr}) => {
    return {
        type: UPDATE_OBJ,
        payload: {tempKey, tempFood, tempIngr}
    }
}

export const actionCreators = {
  setNewObj,
  updateObj
}
