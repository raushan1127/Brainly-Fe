import { ShareIcon } from "../Icons/shareIcon"

interface cardprops {
title: String;
link: String;
type: "twitter" | "youtube" | "linkedIn";
}

export function Card ( { title, link, type} : cardprops) {
    return (
    <div>
    <div className="p-4  rounded-md shadow-r-lg shadow-slate-800 border-gray-200 border max-w-72">   
    <div className="flex justify-between">
    <div className="flex items-center ">
        <div className="text-gray-500 pr-2">
        <ShareIcon />
        </div> 
         projectIdeas
        </div>

     <div className="flex items-center">
     <div className="text-gray-500 pr-2">
        <ShareIcon />
        </div> 
        <div className="text-gray-500 pr-2">
        <ShareIcon />
        </div> 
    </div>
    </div>
    <div className="pt-4">
    {/* <iframe className="w-full" src="https://www.youtube.com/embed/Wmygs7w31YQ?si=GqpWrUTvD6zR9BXK" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe> */}

{/* <blockquote className="twitter-tweet">
  <a href="https://twitter.com/username/status/807811447862468608"></a> 
</blockquote> */}

{/* <iframe className="w-full" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7313765424779685888" height="399" width="504" frameBorder="0" title="Embedded post"></iframe> */}
    
    </div>
    </div>
    </div>  
    )
}