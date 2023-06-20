import Products from "./Products";

function App() {
  return (
    <div>
      <h1>I am in App Component</h1>
      <Products sendProducts={
        function (parameter){
            console.log("parameters",parameter);
        }
      }></Products>
    </div>
  );
}

export default App;
