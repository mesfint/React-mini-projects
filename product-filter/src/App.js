
import './App.css';
import ProductList from './components/product/ProductList';
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from 'react';

//1.  Create the context in a separate file
//2.  Wrap the App component with the context provider
//3.  Consume the context in the child component

function App() {



  return (
  
    <div>
      <ProductList />
    </div>

 
   
  );
}

export default App;