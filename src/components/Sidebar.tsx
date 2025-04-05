import { BrainIcon } from "../Icons/BrainIcon"
import { TwitterIcon } from "../Icons/twitterIcon"
import { YoutubeIcon } from "../Icons/youtubeIcon"
import { SidebarItems } from "./Sidebartems"

export function Sidebar() {
    return (
     <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2 text-purple-600">
                <BrainIcon />
            </div>
            Brainly 
        </div>
      <div className="pt-4">
        <SidebarItems text = "twitter" icon = {<TwitterIcon />} />
        <SidebarItems text = "youtube" icon = {<YoutubeIcon />} /> 

      </div>
  </div>
)
}