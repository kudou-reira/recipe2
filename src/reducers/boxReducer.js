import {FOOD_CHANGE} from '../actions/types';
import {INGR_CHANGE} from '../actions/types';
import {NEW_FOOD} from '../actions/types';
import {NEW_INGR} from '../actions/types';
import {SET_FOOD} from '../actions/types';
import {SET_INGR} from '../actions/types';
import {ADD_FOOD} from '../actions/types';
import {ADD_INGR} from '../actions/types';

const INITIAL_STATE = {
    
    food: '',
    ingredients: ''

};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case FOOD_CHANGE:
            return {...state, food: action.payload};
        
        case INGR_CHANGE:
            return {...state, ingredients: action.payload};
        
        case NEW_FOOD:
            return {...state, food: action.payload};
            
        case NEW_INGR:
            return {...state, ingredients: action.payload};
            
        case SET_FOOD:
            return {...state, food: action.payload};
         
        case SET_INGR:
            return {...state, ingredients: action.payload};
            
        case ADD_FOOD:
            return {...state,
                food: [...state.food, action.newItem]
            };
        
        case ADD_INGR:
            return {...state,
                food: [...state.food, action.newItem]
            };
            
        default:
            return state;
                      
    }
    
    
};