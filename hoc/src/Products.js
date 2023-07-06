import {useState} from 'react';
import HOC from './HOC';
function Products(props){
    
    
    return(
        <div>
            <h1 onClick={props.updateCounter}>Products Count is:{props.counter}</h1>
        </div>
    )

}
const ProductsHOC = HOC(Products,50);
export default ProductsHOC;