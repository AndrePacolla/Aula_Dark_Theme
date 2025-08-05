import { UseTheme } from "../contexts/ThemeContext";

 export const ThemeSwitch = () => {
    const themeCtx = UseTheme();

   const handleThemeToggle = () => {
    if(themeCtx){
        themeCtx?.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
    }


   }


    return(
        <div className="fixed left-0 top-0 right-0 p-3 text-center cursor-pointer "
        onClick={handleThemeToggle}>
                
                {themeCtx?.theme === "dark" && "Mudar para Light"}
                {themeCtx?.theme === "light" && "Mudar para Dark"}

            </div>

    )
}