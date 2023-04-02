import React from 'react'
import "./Regions.css"


const Regions = ({allRegions,onFilterRegion}) => {
  return (
    <div className="--flex-center">>
        {allRegions.map((region,index)=>(
            <button onClick={()=>onFilterRegion(region)} key={index} type="button" className='btn --btn --btn-foreground'>{region}</button>
        ))}
    </div>
  )
}

export default Regions