import { createContext } from "react";
import { theme } from "./theme";

type themeContextChildrenProps = {
    children:React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider=({children}:themeContextChildrenProps)=>{
    return <ThemeContext.Provider value={theme} >{children}</ThemeContext.Provider>
}