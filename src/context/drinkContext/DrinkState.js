import { useReducer } from "react";
import drinkContext from "./drinkContext";
import drinkReducer from "./drinkReducer"; 
import axios from 'axios'

import {
    GET_DRINKS,
    SET_LOADING,
    FILTER_DRINKS,
    DRINK_ERROR,
    CLEAR_FILTER,
    SORT_DRINKS
} from "./Actions";


const DrinkState = props => {
    const initialState ={
        drinks:[],
        curr_drink: null, 
        error: null, 
        loading: false
    }
    const [state, dispatch] = useReducer(drinkReducer, initialState); 
    
    const getDrinks = async (drink) => {
        if(drink) {
            try {
                console.log(drink);
                const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
                console.log(res.data);
                dispatch({type:GET_DRINKS, payload:res.data}); 
            } catch (error) {
                dispatch({type:DRINK_ERROR, payload:error}); 
            }
        }
    }

    return (
        <drinkContext.Provider
            value={{
                drinks:state.drinks,
                curr_drink: state.curr_drink,
                error: state.error,
                loading: state.loading, 
                getDrinks
            }}
        >
            {props.children}
        </drinkContext.Provider>
    )
}


export default DrinkState; 