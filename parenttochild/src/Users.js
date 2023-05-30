import GenericUser from "./GenericUser";
import PrivilizedUser from "./PrivilizedUser";
function users(props){
    var prev_user ={
        name:"kiran",
        address:"hyderabad",
        pincode:59001
    }
    return (
        <div>
            <h1>Users</h1>
            <PrivilizedUser data={prev_user}></PrivilizedUser>
            <GenericUser data={props.genUser}></GenericUser>
        </div>
    );
} 
export default users;