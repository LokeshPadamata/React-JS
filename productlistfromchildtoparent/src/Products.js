import axios from 'axios';
import {useState} from 'react';
function Products(props){

    var token = "3A5A3";
    const[products,setProducts] = useState([]);
    const fetchProducts = () =>{
        axios.get("https://fakestoreapi.com/products").then(
            response =>{
                console.log(response.data);
                setProducts(response.data);
                console.log(products);
                props.sendProducts(response.data);
            },
            error =>{
                console.log(error);
            }
        )
    }
    return(
        <center>
        <div>
            <h1>I am in Products Component</h1>
            <button onClick={fetchProducts}>Fetch Products</button>
            {products.length}
        </div></center>
    )
}
export default Products;