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
                        {curr_drink.strIngredient1 && <span className='ingredient' >{curr_drink.strIngredient1}</span>} 
                        {curr_drink.strMeasure1 && <span className='measure'>{curr_drink.strMeasure1}</span>} 
                        {curr_drink.strIngredient2 && <span className='ingredient'>{curr_drink.strIngredient2}</span>}
                        {curr_drink.strMeasure2 && <span className='measure'>{curr_drink.strMeasure2}</span>} 
                        {curr_drink.strIngredient3 && <span className='ingredient'>{curr_drink.strIngredient3}</span>}
                        {curr_drink.strMeasure3 && <span className='measure'>{curr_drink.strMeasure3}</span>} 
                        {curr_drink.strIngredient4 && <span className='ingredient'>{curr_drink.strIngredient4}</span>}
                        {curr_drink.strMeasure4 && <span className='measure'>{curr_drink.strMeasure4}</span>} 
                        {curr_drink.strIngredient5 && <span className='ingredient'>{curr_drink.strIngredient5}</span>}
                        {curr_drink.strMeasure5 && <span className='measure'>{curr_drink.strMeasure5}</span>} 
                        {curr_drink.strIngredient6 && <span className='ingredient'>{curr_drink.strIngredient6}</span>}
                        {curr_drink.strMeasure6 && <span className='measure'>{curr_drink.strMeasure6}</span>} 
                        {curr_drink.strIngredient7 && <span className='ingredient'>{curr_drink.strIngredient7}</span>}
                        {curr_drink.strMeasure7 && <span className='measure'>{curr_drink.strMeasure7}</span>} 
                        {curr_drink.strIngredient8 && <span className='ingredient'>{curr_drink.strIngredient8}</span>}
                        {curr_drink.strMeasure8 && <span className='measure'>{curr_drink.strMeasure8}</span>} 
                        {curr_drink.strIngredient9 && <span className='ingredient'>{curr_drink.strIngredient9}</span>}
                        {curr_drink.strMeasure9 && <span className='measure'>{curr_drink.strMeasure9}</span>} 
                        {curr_drink.strIngredient10 && <span className='ingredient'>{curr_drink.strIngredient10}</span>}
                        {curr_drink.strMeasure10 && <span className='measure'>{curr_drink.strMeasure10}</span>} 
                        {curr_drink.strIngredient11 && <span className='ingredient'>{curr_drink.strIngredient11}</span>}
                        {curr_drink.strMeasure11 && <span className='measure'>{curr_drink.strMeasure11}</span>} 
                        {curr_drink.strIngredient12 && <span className='ingredient'>{curr_drink.strIngredient12}</span>}
                        {curr_drink.strMeasure12 && <span className='measure'>{curr_drink.strMeasure12}</span>} 
 
                        
                    </div>
                </div>)
)
  
}

export default DrinkDescription;