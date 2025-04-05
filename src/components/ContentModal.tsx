import  { CrossIcon} from "../Icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"



export function ContentModal({open , onClose})
{
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
            <Input placeholder = {"Title"} />
            <Input placeholder = {"Link"} />
          </div>
          <div className=" flex justify-center">
          <Button variant = "primary" text = "Submit" />
          </div>
       </span>
    </div>
    </div>
     }
    </div>
   )
}

