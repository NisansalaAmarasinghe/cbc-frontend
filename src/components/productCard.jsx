export default function ProductCard(props){

    console.log(props);

return(
    <div>
        <img src={props.src}></img>
        <button>Add to cart</button>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
        
    </div>
)

}