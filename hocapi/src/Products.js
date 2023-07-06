import {useState} from 'react';
import {axios} from 'axios';
import HOC from './HOC';
function Products(props){
    console.log(props.data);
    return(
        <div>
            <button onClick={props.makeAPTCall}>Fetch Products</button>
            {props.data}
        </div>
    )
}
const productsHOC = HOC(Products,"https://fakestoreapi.com/products");
export default productsHOC;