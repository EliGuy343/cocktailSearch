import React, { useContext, useRef } from 'react'
import drinkContext from '../../context/drinkContext/drinkContext';
import './ingredientFilter.scss'
function IngredientFilter() {

    const {filterIngrdients} = useContext(drinkContext); 
    const filter = useRef(""); 

    const onClickFilter = (e) => {
        e.preventDefault();
        filterIngrdients(filter.current.value);
    }
    return (
        <div className='container'>
        <form className="input">
            <input ref={filter} type="name" placeholder="filter by ingredient" className='filterIngredient'/>
                <button className="filterButton" onClick={onClickFilter}>
                Filter
                </button>
            </form>
        </div>
    )
}

export default IngredientFilter;