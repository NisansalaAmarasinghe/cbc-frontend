import { createClient } from "@supabase/supabase-js"
import { useState } from "react"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdnpncHdwZ3d3eGdwdGVncGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NTI4MTAsImV4cCI6MjA1MjUyODgxMH0.15PoLZkrQftS5j-EywhtLMIW-_C-OhfQMPbeLqz-fs8`


const url = "https://lovzgpwpgwwxgptegpdl.supabase.co"

export default function FileUploadTest(){

    const [file,setFile] = useState(null)

    function handleUpload(){
        if(file==null){
            alert("please select a file")
            return
        }

        console.log(file)

        //check file type and split
        const fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length-1]

        if(extension != "jpg" && extension != "png"){
            alert("Please select a jpg or png file")
            return
        }

        //to connect supabase
        const supabase = createClient(url,key)

        supabase.storage.from("images").upload(file.name,
            file,{
                cacheControl : "3600",
                upsert : false
            }).then((res)=>{
                console.log(res)
            })

        supabase.storage.from

        
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