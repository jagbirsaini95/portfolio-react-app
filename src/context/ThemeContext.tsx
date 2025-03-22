import { createContext, useContext, } from "react";

//create Theme context
export const ThemeContext = createContext({
    darkMode: false,
    toggleTheme: () => { }
})

// use theme context
export const useTheme = () => useContext(ThemeContext)