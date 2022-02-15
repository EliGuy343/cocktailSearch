
import {
    GET_DRINKS,
    SET_LOADING,
    FILTER_DRINKS,
    DRINK_ERROR,
    CLEAR_FILTER,
    SORT_DRINKS,
    SET_CURRENT
} from "./Actions";


export default (state, action) => {
    switch (action.type) {
        
        case GET_DRINKS:
            return {
                ...state, 
                drinks: action.payload, 
                loading: false 
            }; 
        case SET_CURRENT:
            return {
                ...state,
                curr_drink: action.payload
            }; 
        
        case SET_LOADING: 
            return {
                ...state, 
                loading: true
            };
        case DRINK_ERROR: 
            return {
                ...state, 
                error: action.payload
            };


    }
}