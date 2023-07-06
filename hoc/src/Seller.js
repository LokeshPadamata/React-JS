import {useState} from 'react';
import HOC from './HOC';
function Seller(props){

    return(
        <div>
            <h1 onClick={props.updateCounter}>Sellers Count is:{props.counter}</h1>
        </div>
    )    
}
const SellerHOC = HOC(Seller,35);
export default SellerHOC;