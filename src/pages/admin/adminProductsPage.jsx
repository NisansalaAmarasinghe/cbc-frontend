import axios from "axios"
import { useEffect, useState } from "react"
export default function AdminProductsPage(){

    const[products,setProducts]=useState([
        [
            {
                "_id": "67824ea6b51170e459cdae5d",
                "productId": "B1001",
                "productName": "Hydrating face serum",
                "altNames": [
                    "Moisturizing Serum",
                    "Glow Boast Serum"
                ],
                "images": [
                    "https://example.com/images/serum1.jpg",
                    "https://example.com/images/serum.alt.jpg"
                ],
                "price": 24.99,
                "lastPrice": 200,
                "stock": 200,
                "description": "A lightweight, fastabsorbing serum infused with hydraunic acid and vitamin C to hydrate abd brighten your skin",
                "__v": 0
            },
            {
                "_id": "6785f55104694ec146f96c1c",
                "productId": "B1002",
                "productName": "Hydrating face Mask",
                "altNames": [
                    "Moisturizing Mask",
                    "Glow Boast Serum"
                ],
                "images": [
                    "https://example.com/images/serum1.jpg",
                    "https://example.com/images/serum.alt.jpg"
                ],
                "price": 28.99,
                "lastPrice": 300,
                "stock": 100,
                "description": "A lightweight, fastabsorbing serum infused with hydraunic acid and vitamin C to hydrate abd brighten your skin",
                "__v": 0
            }
        ]
    ])

    useEffect(()=>{
        axios.get("http://localhost:5000/api/products").then(
            (res)=>{
                console.log(res.data)
                setProducts(res.data)
            }
        )
    },[]
)
    

    console.log(products)

    return(
        <div>
            <h1>Admin Products Page</h1>
            {
                products.map(
                    (product,index)=>{
                        return(
                            <div key={product._id}>
                                {index}
                                {product.productName}
                            </div>
            
                        )
                    }

                )
            }
        </div>
    )

}
