import axios from "axios"
export default function AdminProductsPage(){

    axios.get("http://localhost:5000/api/products").then((res)=>{
        console.log(res)
    })

    getProducts()
    
    return(
        <div>
            <h1>Admin Products Page</h1>
        </div>
    )

}

async function getProducts() {
    const res = await axios.get("http://localhost:5000/api/products")
    console.log(res)
}