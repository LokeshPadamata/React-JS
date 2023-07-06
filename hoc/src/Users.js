import {useState} from 'react';
import HOC from './HOC';
function Users(props){
    return(
        <div>
            <h1 onClick={props.updateCounter}>Users Count is:{props.counter}</h1>
        </div>
    )
}
const UsersHOC = HOC(Users,55);
export default UsersHOC;