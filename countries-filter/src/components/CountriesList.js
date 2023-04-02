import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./CountriesList.css"
import Country from './Country'
import Regions from './Regions'
import Search from './Search'




const CountriesList = () => {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])
   

    const fetchCountries = async()=>{
        const response = await axios.get("https://restcountries.com/v3.1/all")
        setCountries(response.data);
        console.log(response.data)
    }
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
    }

    const filterCountries = ()=>{
        setFilteredCountries(countries.filter((country)=> country?.name.common.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    useEffect(()=>{
        fetchCountries()
    },[])

    useEffect(()=>{
        if (countries) {
            filterCountries()
                     
        }

    },[searchTerm, countries])   

   
    const allRegions = ["all",...new Set(countries.map((country)=> country.region))]
    //console.log(allRegions)
    
    const filterRegion = (region)=>{
        if (region === "all") {
            setFilteredCountries(countries)
        }else{
            setFilteredCountries(countries.filter((country)=> country.region === region))
        }
    }


  return (
    <div>
      <header className='container'>

      <div className=' header-container'>
             <h1 className='--text-center --color-white '> Countries Filter</h1>
            <div className=" --flex-between --flex-dir-column --py">
            <Search  searchTerm={searchTerm} onFilter={handleSearch} />
            <Regions allRegions={allRegions} onFilterRegion = {filterRegion} />

            </div>
              

            </div>

          </header>

            <div className="countries-container container   --grid-25 --py2">
            {filteredCountries.length === 0 ? (<h3 className='--flex-center'>No Country Found!!!</h3>) : filteredCountries.map((country)=>
          <div className='countries' key={country.name.common}>
                <Country country={country} />
              </div>
            )}

            </div>   

    </div>
  )
}

export default CountriesList