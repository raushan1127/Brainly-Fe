import { Button} from "./components/Button"
import { ShareIcon } from "./Icons/shareIcon";
import { PlusIcon } from "./Icons/PlusIcon";

function App() {
  

  return (
   <div className="flex ">
    
    <Button variant = "primary" text = "Add Content" startIcon = {<ShareIcon />} ></Button>
    <Button variant = "secondary" text = "Share Brain" startIcon = {<PlusIcon />} ></Button>
   </div>

  )
}

export default App;
