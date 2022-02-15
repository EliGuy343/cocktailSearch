import React, { useState } from 'react'; 
import './header.scss'; 


function Header() {

    const [search, setSearch] = useState("");

    const onSearchClick = (e) => {
        
    }

    return (
        <div className='header'>
        <form className="input">
            <h1 className='title'>Drinks Finder</h1>
            <input type="name" placeholder="search a drink" className='search'/>
                <button className="searchButton">
                Search
                </button>
            </form>
        </div>
  )
}

export default Header