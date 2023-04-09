import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";


const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
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


    return( 
    <ThemeContext.Provider value={{theme,handleToggleTheme,switchBtn}}>
                {children}
    </ThemeContext.Provider>
    );
};

export default ThemeContext;