import { ReactElement } from "react";

interface Sideprops {
    text: string;
    icon: ReactElement;
}

export function SidebarItems({text, icon}: Sideprops) {
    return (
    <div className="flex">
     <div className="p-2"> {icon} </div>
     <div className="p-2"> {text} </div>
    </div>
    )
}