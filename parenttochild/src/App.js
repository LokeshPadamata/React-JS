import Users from './Users.js'
function App() {

  var gen_user={
    name:"varun",
    address:"hyderabad",
    pincode: 53212
  }
  return (
    <div>
     <Users genUser={gen_user}></Users> 
    </div>
  );
}

export default App;
