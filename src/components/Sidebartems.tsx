import { ReactElement } from "react";

interface Sideprops {
    text: string;
    icon: ReactElement;
}

export function SidebarItems({text, icon}: Sideprops) {
    return (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded-md max-w-48 pl-4 transition-all duration-200">
     <div className="pr-2"> {icon} </div>
     <div className=""> {text} </div>
    </div>
    )
}