import {useEffect, useState} from 'react';
function Counter(){
    console.log("Counter Component is loaded");
    const [counter,setCounter] = useState(0);
    useEffect(() =>{
        if(counter==0){
            console.log("Component Did Mount called");
        }
        else{
            console.log("Component Did Update called");
        } 
    },[counter])
    const updateState=()=>{
        setCounter(counter+1);
    }
    return(
        <div>
            <h1 onClick={updateState}>Counter:{counter}</h1>
        </div>
    )
}
export default Counter;