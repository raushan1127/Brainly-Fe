import { ShareIcon } from "../Icons/shareIcon"

interface cardprops {
title: string;
link: string;
type: "twitter" | "youtube";
}

export function Card ( { title, link, type} : cardprops) {
    return (
    <div>
    <div className="p-4  rounded-md shadow-r-lg shadow-slate-800 border-gray-200 border max-w-72 min-h-48 min-w-72">   
    <div className="flex justify-between">
    <div className="flex items-center ">
        <div className="text-gray-500 pr-2">
        <ShareIcon />
        </div> 
         { title}
        </div>

     <div className="flex items-center">
     <div className="text-gray-500 pr-2">
        
        <a href={ link} target="_blank">
        <ShareIcon />
        </a>
        </div> 
        <div className="text-gray-500 pr-2">
        <ShareIcon />
        </div> 
    </div>
    </div>
    <div className="pt-4">
        
        {type === "youtube" && <iframe className="w-full" src= {link.replace("watch","embed").replace("?v=","/")}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>}

    {type === "twitter" && <blockquote className="twitter-tweet">
  <a href={link.replace("x.com","twitter.com")}></a> 
</blockquote> }





    
    </div>
    </div>
    </div>  
    )
}