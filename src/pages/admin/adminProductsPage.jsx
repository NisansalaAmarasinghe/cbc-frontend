import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]);
    const [test, setTest] = useState("Not Pressed");

    useEffect(() => {
        axios.get("http://localhost:5000/api/products").then((res) => {

            console.log("Use effect is running")
            setProducts(res.data); //run only one time in loading if any functions more
        });
    }, [],[test]); //but this dependency array can be load more times with chnage of test variable

    return (
        <div className="p-6 bg-gray-100 min-h-screen relative">

            <Link to={"/admin/products/addProduct"} className="absolute right-[25px] bottom-[25px] text-[25px] 
            border border-blue-500 border-[2px] text-blue-500 p-5 rounded-xl hover:bg-blue-300 hover:rounded-full"><FaPlus/></Link>

            <button className="absolute right-[125px] bottom-[25px] text-[25px] 
            border border-blue-500 border-[2px] text-blue-500 p-5 rounded-xl hover:bg-blue-300 hover:rounded-full" onClick = {()=>{
                if(test =="Pressed"){
                    setTest("Not pressed")
                }else{
                    setTest("Pressed")
                }
            }}>
            
            {test}

            </button>

            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Admin Products Page
            </h1>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="table-auto w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Product ID</th>
                            <th className="px-6 py-3">Product Name</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Last Price</th>
                            <th className="px-6 py-3">Stock</th>
                            <th className="px-6 py-3">Description</th>
                            <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">{product.productId}</td>
                                <td className="px-6 py-4">{product.productName}</td>
                                <td className="px-6 py-4 text-green-500 font-semibold">
                                    ${product.price}
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    ${product.lastPrice}
                                </td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 flex justify-center space-x-4">
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FaPencilAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
