import './App.css';
import Products from './Products';
import Seller from './Seller';
import Users from './Users';

function App() {
  return (
    <div className="App">
     <header>
      <Seller></Seller>
      <Users></Users>
      <Products></Products>
      </header>
    </div>
  );
}

export default App;
