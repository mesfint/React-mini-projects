import React from 'react'
import Card from '../UI/Card'
import "./Product.css"
// import productImage from "../..//images/7.png"
const Product = ({title,img,price,myTheme}) => {
  return (
    <div  data-theme={myTheme}>
   
        <div className="product --card " >
                  
             <img src={img} alt="" />                    
               <div className="product-card --center-all --p">
                        <h3 className='--text-background'>{title}</h3>                     
                        <div className="--flex-between --width-100">
                            <h4 className='--text-background'>{price}</h4>
                            <button className='--btn btn-foreground'>Add to Cart</button>
                        </div>
                </div>
             </div>
              
                
    </div>
  )
}

export default Product