import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageUrls, setImageUrls] = useState("");
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    async function handleSubmit(){
       const altNames = alternativeNames.split(",")
       const imgUrls = imageUrls.split(",") 

       const product = {
        productId : productId,
        productName : productName,
        altNames : altNames,
        images : imgUrls,
        price : price,
        lastPrice : lastPrice,
        stock : stock,
        description : description
       }

       const token = localStorage.getItem("token")

       try{
        await axios.post("http://localhost:5000/api/products",product,{
            headers : {
                Authorization : "Bearer "+token
            }
        })

        navigate("/admin/products")

        toast.success("Product Added Successfully")

       }catch(err){
        toast.error("Failed to add product")
       }
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-blue-100 py-10">
            <h1 className="text-3xl font-bold text-blue-800 mb-8">
                Add Product Form
            </h1>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Product ID</label>
                    <input
                        type="text"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter Product ID"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Product Name</label>
                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Alternative Names</label>
                    <input
                        type="text"
                        placeholder="Enter Alternative Names"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={alternativeNames}
                        onChange={(e) => setAlternativeNames(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Image URLs</label>
                    <input
                        type="text"
                        placeholder="Enter Image URLs"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={imageUrls}
                        onChange={(e) => setImageUrls(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Price</label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Last Price</label>
                    <input
                        type="number"
                        placeholder="Enter Last Price"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={lastPrice}
                        onChange={(e) => setLastPrice(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Stock</label>
                    <input
                        type="number"
                        placeholder="Enter Stock"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        placeholder="Enter Product Description"
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={handleSubmit}
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}


