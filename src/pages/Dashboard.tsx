import { Button} from "../components/Button"
import { ShareIcon } from "../Icons/shareIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import { Card } from "../components/Card";
import { ContentModal } from "../components/ContentModal";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { Link } from "react-router-dom";

function Dashboard() {

  const [modalopen , setmodalopen] = useState(false)
  const contents = useContent()
  

  return (
    <div>
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
    <ContentModal open = {modalopen} onClose={() => {
      setmodalopen(false)
    }}/>
    <div className="flex justify-end gap-4  ">
    <Button onClick = { () => {
      setmodalopen(true)
    }} variant = "primary" text = "Add Content" startIcon = {<PlusIcon />} ></Button>
    <Button variant = "secondary" text = "Share Brain" startIcon = {<ShareIcon />} ></Button>
   </div>
<div className="flex gap-4">

  {contents.map(({type,title, link}) => 
    <Card type ={type}
  link={link} 
  title= {title} />  )}

  
   {/* <Card title = "youtube video" link = "https://www.youtube.com/watch?v=wBkU3Mg0rGU" type= "youtube"  />
   <Card title = "twitterPost" link = "https://x.com/gemsofbabus_/status/1908154700433637649" type= "twitter"  /> */}
  </div>
  </div>
  </div>

  )
}

export default Dashboard;
