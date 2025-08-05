import { UseTheme } from "../contexts/ThemeContext";

type Props = {
    label: string;
    onClick: () => void;
}



export const Button = ({label, onClick}: Props) => {

    const themeCtx = UseTheme();

    return(

            <button className={` border border-black  px-4 p-3 rounded-md mb-5 
                ${themeCtx?.theme === "dark" ? "bg-white text-black" :
                    "bg-black text-white"
                }`}
            onClick={onClick}>
                {label}
            </button>

        
    )
} ;