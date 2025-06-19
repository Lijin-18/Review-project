import { createContext , useState } from "react";
import { useEffect } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{


    const [theme , setTheme] = useState(true);

    const changeTheme = () =>{
        setTheme((prev) => !prev);
    }

      useEffect(() => {
    document.body.className = theme ? "dark-mode" : "light-mode";
  }, [theme]);

    return (
        <ThemeContext.Provider value={{theme , changeTheme}}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    )


}

export default ThemeContext;