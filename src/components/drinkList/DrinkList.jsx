import React from 'react'
import './drinkList.scss'; 
import drinkContext from '../../context/drinkContext/drinkContext';
import {useContext } from 'react'
import DrinkItem from '../drinkItem/DrinkItem';
function DrinkList() {
  const {drinks} = useContext(drinkContext); 
  if(drinks == null || drinks.length == 0) {
    return (
      <div className='drink-list'>
        <h2>No drinks found</h2>
      </div>
    )
  }

  return (
    <div className='drink-list'>
      <h3>Drinks Found:</h3>
      {drinks.map(drink => (<DrinkItem key={drink.idDrink} drink={drink}/>))}
    </div>
  )
}

export default DrinkList;