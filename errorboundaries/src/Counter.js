import {useState,useEffect} from 'react';
function Counter(){

    const [counter,setCounter] = useState(0);
    if(counter==15){
        throw new Error("Limit Exceed! Application crashed");
    }
    const counterUpdate = () =>{
        setCounter(counter+1);
    }
    return(
        <div>
            <h1 onClick={counterUpdate}>CounterValue {counter}</h1>
        </div>
    )
}
export default Counter;