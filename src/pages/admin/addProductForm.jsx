export default function AddProductForm(){
    return(
        <div className="w-full h-full bg-red-400">
            <h1 className="text-2xl font-bold text-center"></h1>
            <div className="flex flex-col">
                <input type="text" placeholder="Insert your product here"/>
                <input type="text" placeholder="Insert your product here"/>
                <input type="text" placeholder="Insert your product here"/>
                <input type="text" placeholder="Insert your product here"/>
                <button>Add Product</button>
            </div>          
        </div>
    )
}