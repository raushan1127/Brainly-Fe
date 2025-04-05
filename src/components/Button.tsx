import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary"| "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
}

const variantClass = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-400"
}

const defaultClass = "px-4 py-2 font-light rounded-md flex items-center "




export function Button({variant, text, startIcon, onClick}: ButtonProps) {

    return (
    <button onClick={onClick} className = {variantClass[variant] + " " + defaultClass } > 
    <div className="pr-2">
        {startIcon}
        </div>
        { text}
        </button>
    )

}