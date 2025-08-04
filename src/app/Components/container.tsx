import { ReactNode } from "react"
import { UseTheme } from "../contexts/ThemeContext";


type Props = {
    children : ReactNode
}


export const Container = ({children}: Props) => {
    const themeCtx = UseTheme();


    return(
        <div className={` w-full h-screen 
            ${themeCtx?.theme === "dark" ? 
                  "bg-black text-white" : 
                  " bg-white text-black"
                }
        
        `}>

            <div className=" container mx-auto">
              {children}  
             TEMA: {themeCtx?.theme}
            </div>

            
        </div>
    )
}