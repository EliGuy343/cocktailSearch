import React from 'react'
import './drinkItem.scss'
function DrinkItem({drink}) {

  return (
    <div className='drink-item'>
        <img  src={drink.strDrinkThumb} />
        <span className='title'>Title:{drink.strDrink}</span>       
    </div>
  )
}

export default DrinkItem