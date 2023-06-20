function Products(props){

    const renderList = () =>{
        let newArr = props.data.map(function (products){
            return <li key={products.id}>{products.title}</li>
    })
    return newArr;
    }
    return(
        <center>
        <div>
            <h1>I am in Products Component</h1>
            <h1>{props.data.length}</h1>
            <ul>
                {renderList()}
            </ul>
        </div>
        </center>
    )
}
export default Products;