import React from 'react'
import "./Search.css"


const Search = ({searchTerm, onFilter}) => {
  return (
    <div className='--form-control'>
        <input 
         type="text" 
         value={searchTerm}
        onChange={onFilter}
         placeholder="Search for a country..." />
    </div>
  )
}

export default Search