import {SET_OBJ} from './types';


export const setObj = ({food, ingredients}) => {

    return {
        type: SET_OBJ,
        payload: {food, ingredients}
    }
}

