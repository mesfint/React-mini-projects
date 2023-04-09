import React,{useContext, useEffect, useState} from 'react'
import Categories from '../categories/Categories'
import Search from '../search/Search'
import Product from './Product'
import "./ProductList.css"
import {products as data} from "../../products-data"
import Footer from '../Footer/Footer'
import {FaMoon,FaSun} from 'react-icons/fa'
import ThemeContext from '../../context/themeContext'

//will return a set of unique categories
const allCategories = ['all', ...new Set(data.map((item) => item.category))];


const ProductList = () => {
    const {theme ,handleToggleTheme,switchBtn} = useContext(ThemeContext)

    const[products,setProducts] = useState(data)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const[categories,setCategories] = useState(allCategories);


   const handleSearch=(e)=>{
    setSearchTerm(e.target.value)

    }

    const filterCategory=(category)=>{
        if(category === 'all'){
            setFilteredProducts(data)
        }
        else{
            const newProducts = data.filter((product)=>product.category === category)
            setFilteredProducts(newProducts)
        }
    }

    useEffect(()=>{
        setFilteredProducts(categories === "all" ? products :  products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          ));

          

    },[searchTerm,products])
   

  return (
    <div  className="product-list">
        <header  data-theme={theme}>
          
            <div className="head-section">
                <h1 className='--text-center'> Product Filter</h1>
                <div onClick={handleToggleTheme}>
                   <span className='toogle-btn'>
                    <FaMoon   size={18}/>
                    <FaSun   size={18}/>
                    <div className= {switchBtn ? "ball move" : "ball"} ></div>
                   </span>
                </div>

            </div>
        
            <div className="--flex-between --flex-dir-column --py">
                <Search  inputValue={searchTerm} onInputChange = {handleSearch}/>
                <Categories filterCategory={filterCategory} categories={categories}   />

            </div>
                           
        
        </header>
        <div  data-theme={theme}>
        <div className="product-container " >
            <div className="products container --grid-25 --py2">
           {filteredProducts.length === 0 ? (<h3>No Product found!!!</h3>)  :   (filteredProducts.map((product)=>{
                return <Product key={product.id} {...product} />
           }))}                  
                
            </div>          
            
        </div>

        </div>

        <Footer />
    </div>
  )
}

export default ProductList