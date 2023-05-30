import React from 'react';
class Counter extends React.Component{

    constructor() {
        console.log("Constructor Called");
        super();
        this.state={
            counter: 0
        }
    }
    updateCounter=()=>{
        this.setState({counter: this.state.counter+1});
    }
    render(){
        return(
            console.log("render is called"),
            <div>
                <h1 onClick={this.updateCounter}>Counter Value: {this.state.counter}</h1>
                
            </div>
        )
    }
    componentDidMount(){
        console.log("Component Did Mount is Called");
    }
    componentDidUpdate(){
        console.log("Component Did Update is Called");
    }
}
export default Counter;