function GenericUser(props){
    return(
       <div>
        <h1>Generic User</h1>
         {props.data.name}<br></br>
         {props.data.address}<br></br>
         {props.data.pincode}<br></br>
        </div>
    )
}
export default GenericUser;