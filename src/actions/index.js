import { SET_NEW_OBJ, UPDATE_OBJ, DELETE_OBJ } from './types';

const setNewObj = ({ tempTitle, tempContent, tempPhotoURL, tempLink }) => {
    return {
        type: SET_NEW_OBJ,
        payload: { tempTitle, tempContent, tempPhotoURL, tempLink }
    }
}

const updateObj = ({tempKey, tempTitle, tempContent, tempPhotoURL, tempLink}) => {
    return {
        type: UPDATE_OBJ,
        payload: {tempKey, tempTitle, tempContent, tempPhotoURL, tempLink}
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
