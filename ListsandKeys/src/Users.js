import axios from 'axios';
import {useState,useEffect} from 'react';
function Users(){
    const renderList = () =>{
        let results =    users.map(
                    user =>{
                        return <tr key={user.id}><td>{user.name}</td><td>{user.address.city}</td><td>{user.address.geo.lat}</td></tr>
                    })
        return results;             
                }
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            response=>{
                console.log(response.data);
                setUsers(response.data);
            }
        )
        },[]) 
    // return(
    //     <div>
    //         <h1>Users</h1>
    //         {users.length ==0 ? <h1>Users Loading</h1>: <ul>{renderList()}</ul>}
    //     </div>
    // )    
    return(
        <div>
             <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Latitude</th>
      </tr>
    </thead>
    <tbody>
     {renderList()}
    </tbody>
  </table>
        </div>
    )
}
export default Users;