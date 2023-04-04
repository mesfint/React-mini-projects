import React from 'react'
import "./Sub.css"

const Sub = ({plan,theme,price,isBasic,isPro,isMaster,yearly}) => {
  return (
    <div className='price-box --card'>
        <div className={`box --p2 ${theme}`}>
        <p className='--text-light'>{plan}</p>
        <h4 className='--text-light'>
            <span>$</span>
           {yearly ?  <span className='basic'>{price}</span> : <span className='basic'>{price}</span>}
            
        {yearly && <p className='--text-light'><del>30% Off</del></p>}
        </h4>
        
        {isPro && <p className='--text-light'>Everything In Basic, plus</p>}
        {isMaster && <p className='--text-light'>Everything In Pro, plus</p>}
    </div>
    <div className="features">
    
        <ul>
        {isBasic && <li>1 User</li>}
        {isBasic && <li>Unlimited Hosting</li>}
        {isBasic && <li>5GB free</li>}
           
        {isPro && <li>10 User</li>}
        {isPro && <li>Email Support</li>}
        {isPro && <li>GitHub Tool</li>}
           
        {isMaster && <li>100 User</li>}
        {isMaster && <li>Unlimited Bandwidth</li>}
        {isMaster && <li>500GB free</li>}
           
            </ul>
            <button className={`btn ${theme}`}>
          Buy Now
        </button>

    </div>

    </div>
  )
}

export default Sub