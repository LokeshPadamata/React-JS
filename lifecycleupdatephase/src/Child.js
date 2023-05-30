import React from 'react';
class Child extends React.Component{
    constructor(){
        console.log("Child Constructor");
        super();
        }

        componentDidMount(){
            console.log("child did mount");
        }
        componentDidUpdate(){
            console.log("child did update");
        }
        render(){
        return(
            console.log("child render"),
            <div>
                <h1>childcounter:{this.props.counter}</h1>
            </div>
        )

    }
}
export default Child;