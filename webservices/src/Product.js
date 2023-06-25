import axios from 'axios';
import {useEffect, useState} from 'react';
function Product(){

    const renderProductsList = () =>{
        let allProducts = products.map((product)=>{
            return <tr key={product.productId}><td>{product.productId}</td><td>{product.name}</td><td>{product.price}</td><td><button>Delete</button></td><td><button>Edit</button></td></tr>
        })
        return allProducts;
    }
    const [product, setProduct]=useState({
        productId: "",
        name:"",
        description:"",
        imageURL:""
    })
    const [products, setProducts] = useState([]);
    const onFieldChange = (event)=>{
        setProduct({...product,[event.target.name]:event.target.value});
    }
    const addProduct = (event)=>{
        event.preventDefault();
        console.log("products",products);
        axios.post("http://localhost:9012/product/all").then(
            response =>{
                console.log(response);
            },
            error=>{
                console.log(error);
            }
        )
    }
    useEffect(() =>{
        getProducts();
    },[])
    const getProducts = () =>{
        axios.get("http://localhost:9012/product/all").then(
            response =>{
                console.log(response);
                setProducts(response.data);
            },
            error=>{
                console.log(error);
            }
        )
    }
    return(
        <div>
        <h1>Add Your Product</h1>    
        <form>
        <input onChange={onFieldChange} type="text" name="productId" placeholder="Enter productId Here"></input><br></br><br></br>              
        <input onChange={onFieldChange} type="text" name="name" placeholder="Enter productName Here"></input><br></br><br></br>    
        <input onChange={onFieldChange} type="text" name="description" placeholder="Enter product Description Here"></input><br></br><br></br>    
        <input onChange={onFieldChange} type="text" name="imageURL" placeholder="Enter product Image URL Here"></input><br></br><br></br>
        <button onClick={addProduct}>Add Product</button>
        </form>
        <hr></hr>
        <table border="1" style={{width:"100%"}}>
            <thead>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product price</th>
            </thead>
            <tbody>
                    {renderProductsList()}
                </tbody>
        </table>
        </div>
    )
}
export default Product;