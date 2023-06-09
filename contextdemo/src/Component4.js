import { useContext } from "react";
import {UserContext} from "./UserContext";
function Component4(){
    var data = useContext(UserContext);
    return(
        <div>
            <h1>Component4 called</h1>
            <h4>Token:  {data}</h4>
        </div>
    )
}
export default Component4;