import {
  SET_NEW_OBJ,
  UPDATE_OBJ,
  DELETE_OBJ
} from '../actions/types';
import _ from 'lodash';
import fakeData from '../lib/initialData'

const INITIAL_STATE = fakeData;

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

      case SET_NEW_OBJ:
        const newListItem = {
          key: state.length,
          title: action.payload.tempTitle,
          content: action.payload.tempContent,
          url: action.payload.tempPhotoURL,
          link: action.payload.tempLink
        }
        return [...state, newListItem];

      case UPDATE_OBJ:
        // we cannot directly mutate the state, so make a deep clone of it and return that
        const list = _.cloneDeep(state)
        const { tempKey, tempTitle, tempContent, tempPhotoURL, tempLink } = action.payload
        list[tempKey] = { key: tempKey, title: tempTitle, content: tempContent, url: tempPhotoURL, link: tempLink }
        return list
            
      case DELETE_OBJ:
        const newList = [
                            ...state.slice(0, action.payload), 
                            ...state.slice(action.payload + 1)
                        ]
        const resetIdxList = newList.map((item, index) => {
            item.key = index;
            return item;
        });
        return newList
            
      default:
        return state;
    }

};
