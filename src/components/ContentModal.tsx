import { useRef, useState } from "react"
import  { CrossIcon} from "../Icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
   Youtube = "youtube",
   Twitter = "twitter"

}



export function ContentModal({open , onClose}){

   const titleRef = useRef();
   const linkRef = useRef() ;
   const [type , setType] = useState(ContentType.Youtube)

  async  function addContent( ) {

    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post ( BACKEND_URL + "/api/v1/content", {
      link,
      title,
      type
    }, {
      headers: {
        "Authorization" : localStorage.getItem("token")
      }
    })

   }


return (
    <div>
     {open &&  <div className="w-screen h-screen flex justify-center opacity-80 bg-slate-500 fixed top-0 left-0">
     <div className="flex flex-col justify-center"> 
       <span className="bg-white opacity-100 p-4">
          <div className="flex pb-4 justify-end">
            <div onClick={onClose} className="cursor-pointer">
            <CrossIcon />
            </div>
           
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <Input reference={titleRef} placeholder = {"Title"} />
            <Input reference={linkRef} placeholder = {"Link"} />
          </div>
          <div className="">
            <h1 >Type</h1>
            <div className="flex gap-1 p-4">
            <Button text="youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => { setType(ContentType.Youtube)}} />
            <Button text="youtube" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => { setType(ContentType.Twitter)}} />
            </div>

          </div>
          <div className=" flex justify-center">
          <Button onClick={addContent} variant = "primary" text = "Submit" />
          </div>
       </span>
    </div>
    </div>
     }
    </div>
   )
}

