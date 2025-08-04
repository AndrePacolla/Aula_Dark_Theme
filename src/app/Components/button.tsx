type Props = {
    label: string;
    onClick: () => void;
}



export const Button = ({label, onClick}: Props) => {
    return(
        <button className={` border border-black  px-4 p-3 rounded-md`}
        onClick={onClick}>
      
        {label}

        </button>
    )
} ;