
import './App.css';
import ProductList from './components/product/ProductList';
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from 'react';

function App() {
  //light is the current state 
  //the useLocalS => will handle all the logic of setting and getting the value from the local storage
  //Such as stringifying and parsing the value
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState( false);


  const handleToggleTheme=()=>{
    //dark is coming from the index.css [data-theme="dark"] 
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setSwitchBtn(!switchBtn)
  }
// this useEffect is very important 
//because it will check if the theme is dark or light
//and will set the switchBtn to true or false
  useEffect(()=>{
    if(theme === "dark"){
      setSwitchBtn(true)

    }
},[theme])


  return (
    <div>
      <ProductList myTheme={theme} onToggleTheme = {handleToggleTheme} onSwitch={switchBtn} />
    </div>
  );
}

export default App;