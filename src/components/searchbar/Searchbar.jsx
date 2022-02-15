import React, { useContext, useRef } from 'react'; 
import './searchbar.scss'; 
import DrinkContext from '../../context/drinkContext/drinkContext';

function Searchbar() {

    const {getDrinks} = useContext(DrinkContext); 


    const search = useRef("");

    const onSearchClick = (e) => {
        e.preventDefault();
        if(search.current.value != ""){
            getDrinks(search.current.value);
        }
    }

    return (
        <div className='container'>
        <form className="input">
            <h1 className='title'>Drinks Finder</h1>
            <input ref={search} type="name" placeholder="search for a drink" className='search'/>
                <button className="searchButton" onClick={onSearchClick}>
                Search
                </button>
            </form>
        </div>
  )
}

export default Searchbar