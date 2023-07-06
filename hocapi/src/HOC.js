import axios from "axios";
import { Component, useState } from "react";
function HOC(component,url){
    const MyHOC =()=>{
        const [data,setData] = useState([]);
        const makeAPTCall = ()=>{
            axios.get(url).then(
                response=>{
                    setData(response.data);
                    
                }
            )
        }
        return(
            <Component data={data} makeAPTCall={makeAPTCall}></Component>
        )
    }
    return MyHOC;
}
export default HOC;