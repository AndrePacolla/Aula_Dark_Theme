import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "themeKeyContext";


type ContextThemeType = {
    theme: string;
    setTheme: (newTheme: string) => void;
}


export const ContextTheme = createContext< ContextThemeType| null>(null);

export const ContextProvider = ({children}:{children: ReactNode}) => {


const [theme, setTheme] = useState(

    localStorage.getItem(STORAGE_KEY) || "light"
);

useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme)
},[theme])



    return(
        <ContextTheme.Provider value={{theme, setTheme}}>
            {children}
        </ContextTheme.Provider>
    )
};


export const UseTheme = () => useContext(ContextTheme);
