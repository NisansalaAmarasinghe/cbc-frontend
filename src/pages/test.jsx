import { useState } from "react"

export default function FileUploadTest(){

    const [file,setFile] = useState(null)

    function handleUpload(){
        if(file==null){
            alert("please select a file")
        }

        console.log(file)
    }
    return(
        <div>
            <h1>File Uplaod Test</h1>
            <input type="file" onChange={(e)=>{
                setFile(e.target.files[0])
            }}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}