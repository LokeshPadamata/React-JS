import React from 'react';
class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    updateUsername = (event)=>{
        var value = event.target.value;
        this.setState({username: value});
    }
    updatePassword = (event) =>{
        var value = event.target.value;
        this.setState({password: value});
    }
    Login = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <center>
                <form>
                    <input onChange={this.updateUsername} type="text" id="username" placeholder="Enter username"></input><br></br><br></br>
                    <input onChange={this.updatePassword} type="text" id="username" placeholder="Enter username"></input><br></br><br></br>
                    <button onClick={this.Login}>Login</button>
                </form></center>
            </div>
        )
    }
}
export default Login;