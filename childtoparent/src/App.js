import Login from "./Login";
function App() {
  return (
    <div>
      <Login submitToken={
        function (parameter){
            console.log(parameter);
        }
      }></Login>
    </div>
  );
}

export default App;
