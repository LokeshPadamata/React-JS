import {useState} from 'react';
function User(){
    const [user,setUser] = useState('');
    const selectedType=(event) =>{
        console.log(event.target.value);
        setUser(event.target.value);
    }
    if(user===""){
        return(
            <div>
                <select onChange={selectedType}>
                    <option>Select type of User</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                </select>
            </div>
        
    )
    }
    if(user==='admin'){
        return(
            <div>
                <input type="text" placeholder="Enetr RSA Token Here"></input><br></br><br></br>
                <button>Loin</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <input type="text" placeholder="Enter Username"></input><br></br><br></br>
                <input type="text" placeholder="Enter password"></input><br></br><br></br>
                <button>Login</button>
            </div>
        )
    }
}
export default User;