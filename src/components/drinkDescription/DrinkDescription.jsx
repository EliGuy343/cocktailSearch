import React, { useContext } from 'react'
import drinkContext from '../../context/drinkContext/drinkContext';
import './drinkDescription.scss'

function DrinkDescription() {
    const {curr_drink} = useContext(drinkContext); 

    if(curr_drink == null) {
        return (
            <div className="drink-desc">
                <h3>No drink selected</h3>
            </div>
        )
    }

        return (
            curr_drink !== null && (
                <div className='drink-desc'>
                    <div className='first'>
                        <span className='title'>{curr_drink.strDrink}</span>
                        <img src={curr_drink.strDrinkThumb}/>
                        <span>{curr_drink.strInstructions}</span>
                    </div>
                </div>)
)
  
}

export default DrinkDescription;