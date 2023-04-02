import React from 'react'
import "./Categories.css"

const Categories = ({filterCategory, categories}) => {
  
 const handleUpperCase=(str)=>{
  return str.charAt(0).toUpperCase() + str.slice(1);

 }

  return (
    <div className="--flex-center">
    {categories.map((category, index)=>{
        return <button onClick={()=>filterCategory(category)} key={index} type='button' className='btn --btn --btn-foreground' onClick={()=>filterCategory(category)}>
        {handleUpperCase(category)}
        </button>
    })}
    

    </div>
  )
}

export default Categories