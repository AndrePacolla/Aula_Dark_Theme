import { UseTheme } from "../contexts/ThemeContext";




export const Button = () => {

    const themeCtx = UseTheme();

     const handleThemeToggle = () => {
    
        themeCtx?.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
  


   }

    return(

            <button className={` border border-black  px-4 p-3 rounded-md mb-5 
                ${themeCtx?.theme === "dark" ? "bg-white text-black" :
                    "bg-black text-white"
                }`}
            onClick={handleThemeToggle}>
               
                {themeCtx?.theme === "dark" && "Mudar para Light"}
                {themeCtx?.theme === "light" && "Mudar para Dark"}
            </button>

        
    )
} ;