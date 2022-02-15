import React from 'react'
import DrinkDescription from '../drinkDescription/DrinkDescription'
import DrinkList from '../drinkList/DrinkList'
import './drinkMenu.scss'
function DrinkMenu() {
  return (
    <div className='drink-menu'>
      <DrinkList className="areaA"/>
      <DrinkDescription/>
      
    </div>
  )
}

export default DrinkMenu