import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa"; // Dashboard Icon (Replaced)
import { MdProductionQuantityLimits } from "react-icons/md"; // Products Icon
import { FaShoppingCart } from "react-icons/fa"; // Orders Icon
import { FaUsers } from "react-icons/fa"; // Customers Icon

export default function AdminHomePage() {
    return (
        <div className="bg-gray-100 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-6">
                
                <nav className="flex flex-col gap-6">
                    <Link
                        className="flex flex-row items-center gap-2 text-white hover:bg-blue-600 p-2 rounded-md w-[80%] text-center transition duration-200"
                        to="/admin/dashboard"
                    >
                        <FaTachometerAlt size={24} />
                        Dashboard
                    </Link>
                    <Link
                        className="flex flex-row items-center gap-2 text-white hover:bg-blue-600 p-2 rounded-md w-[80%] text-center transition duration-200"
                        to="/admin/products"
                    >
                        <MdProductionQuantityLimits size={24} />
                        Products
                    </Link>
                    <Link
                        className="flex flex-row items-center gap-2 text-white hover:bg-blue-600 p-2 rounded-md w-[80%] text-center transition duration-200"
                        to="/admin/orders"
                    >
                        <FaShoppingCart size={24} />
                        Orders
                    </Link>
                    <Link
                        className="flex flex-row items-center gap-2 text-white hover:bg-blue-600 p-2 rounded-md w-[80%] text-center transition duration-200"
                        to="/admin/customers"
                    >
                        <FaUsers size={24} />
                        Customers
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="w-[80%] h-screen bg-white">
                <div className="w-full bg-blue-200 p-4">
                    <h2 className="text-gray-700 text-xl font-semibold">Welcome to the Admin Panel</h2>
                </div>
                <div className="p-6">
                    {/* Placeholder content, you can replace it later */}
                    <div className="text-center text-gray-500">Select an option from the menu to get started.</div>
                </div>
            </div>
        </div>
    );
}
