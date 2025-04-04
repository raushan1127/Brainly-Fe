import { Button} from "./components/Button"
import { ShareIcon } from "./Icons/shareIcon";
import { PlusIcon } from "./Icons/PlusIcon";
import { Card } from "./components/Card";

function App() {
  

  return (
    <div>
    <div className="flex ">
    <Button variant = "primary" text = "Add Content" startIcon = {<ShareIcon />} ></Button>
    <Button variant = "secondary" text = "Share Brain" startIcon = {<PlusIcon />} ></Button>
   </div>

   <Card />

  </div>

  )
}

export default App;
