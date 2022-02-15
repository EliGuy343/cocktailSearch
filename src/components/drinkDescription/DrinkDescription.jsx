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
                    <div className='second'>
                        <h2>Ingridents:</h2>
                        {curr_drink.strIngredient1 && <span>{curr_drink.strIngredient1}</span>}
                        {curr_drink.strIngredient2 && <span>{curr_drink.strIngredient2}</span>}
                        {curr_drink.strIngredient3 && <span>{curr_drink.strIngredient3}</span>}
                        {curr_drink.strIngredient4 && <span>{curr_drink.strIngredient4}</span>}
                        {curr_drink.strIngredient5 && <span>{curr_drink.strIngredient5}</span>}
                        {curr_drink.strIngredient6 && <span>{curr_drink.strIngredient6}</span>}
                        {curr_drink.strIngredient7 && <span>{curr_drink.strIngredient7}</span>}
                        {curr_drink.strIngredient8 && <span>{curr_drink.strIngredient8}</span>}
                        {curr_drink.strIngredient9 && <span>{curr_drink.strIngredient9}</span>}
                        {curr_drink.strIngredient10 && <span>{curr_drink.strIngredient10}</span>}
                        {curr_drink.strIngredient11 && <span>{curr_drink.strIngredient11}</span>}
                        {curr_drink.strIngredient12 && <span>{curr_drink.strIngredient12}</span>}
                    </div>
                </div>)
)
  
}

export default DrinkDescription;