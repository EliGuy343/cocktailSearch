import React, { useContext } from 'react'
import drinkContext from '../../context/drinkContext/drinkContext'
import './drinkItem.scss'
function DrinkItem({drink}) {
    const {setCurrent} = useContext(drinkContext); 
  return (
    <div className='drink-item' onClick={() => setCurrent(drink)}>
        <img  src={drink.strDrinkThumb} />
        <span className='title'>{drink.strDrink}</span>       
    </div>
  )
}

export default DrinkItem