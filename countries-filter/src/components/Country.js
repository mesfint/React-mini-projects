import React from 'react'
import "./Country.css"
import { Link, useNavigate } from 'react-router-dom';

const Country = React.memo(({ country }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/countries/${country.name.common}`, {
      state: { 
        flag: country.flags.png,
        story: country.flags.alt,
        language: Object.values(country.languages).join(", "), 
        capital: country.capital, 
        neighbors: country.borders 
      }
    });
  }

 return (
    <div className="country --card" onClick={handleClick}>
      <div className='country-container'>
        <img src={country.flags.png} alt={country.name.common} className="country-flag" />
        <div className="country-info --p">
          <h3>{country.name.common}</h3>
          <p><strong>Population:</strong> {country.population}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          {country.languages && <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>}
        </div>
      </div>
    </div>
  )
})

export default Country
