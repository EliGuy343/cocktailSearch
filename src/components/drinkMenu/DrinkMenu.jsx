import React from 'react'
import DrinkDescription from '../drinkDescription/DrinkDescription'
import DrinkList from '../drinkList/DrinkList'
import IngredientFilter from '../ingredientFilter/IngredientFilter'
import './drinkMenu.scss'
function DrinkMenu() {
  return (
    <div className='drink-menu'>
      <div>
      <IngredientFilter/>
      <DrinkList className="areaA"/>
      </div>
      <DrinkDescription/>
      
    </div>
  )
}

export default DrinkMenu