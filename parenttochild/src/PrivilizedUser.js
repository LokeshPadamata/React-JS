function PrivilizedUser(props){
    console.log("props",props);
    return (
        <div>
            <h1>Privilized Users</h1>
            {props.data.name}<br></br>
            {props.data.address}<br></br>
            {props.data.pincode}
        </div>
    );
}
export default PrivilizedUser;