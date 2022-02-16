
import {
    GET_DRINKS,
    SET_LOADING,
    FILTER_INGREDIENT,
    DRINK_ERROR,
    CLEAR_FILTER,
    SORT_DRINKS,
    SET_CURRENT
} from "./Actions";


export default (state, action) => {
    switch (action.type) {
        case FILTER_INGREDIENT:
            if(state.drinks != null && state.drinks.length > 0) {
                let regexText = action.payload
                if(regexText.charAt(regexText.length - 1) === `\\`) {
                    regexText = regexText.concat(" ");
                }
                return {
                    ...state, 
                    drinks: state.drinks.filter(drink => {
                        const regex = new RegExp(`${regexText}`, 'gi');
                        return  (drink.strIngredient1 != null && drink.strIngredient1.match(regex))
                        || (drink.strIngredient2 != null && drink.strIngredient2.match(regex))
                        || (drink.strIngredient3 != null && drink.strIngredient3.match(regex)) 
                        || (drink.strIngredient4 != null && drink.strIngredient4.match(regex)) 
                        || (drink.strIngredient5 != null && drink.strIngredient5.match(regex)) 
                        || (drink.strIngredient6 != null && drink.strIngredient6.match(regex)) 
                        || (drink.strIngredient7 != null && drink.strIngredient7.match(regex)) 
                        || (drink.strIngredient8 != null && drink.strIngredient8.match(regex)) 
                        || (drink.strIngredient9 != null && drink.strIngredient9.match(regex)) 
                        || (drink.strIngredient10 != null && drink.strIngredient10.match(regex)) 
                        || (drink.strIngredient11 != null && drink.strIngredient11.match(regex)) 
                        || (drink.strIngredient12 != null && drink.strIngredient12.match(regex)) 
                    }),
                    loading:false
                };
            } else {
                return state;
            }
        
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