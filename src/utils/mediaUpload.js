import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdnpncHdwZ3d3eGdwdGVncGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NTI4MTAsImV4cCI6MjA1MjUyODgxMH0.15PoLZkrQftS5j-EywhtLMIW-_C-OhfQMPbeLqz-fs8`


const url = "https://lovzgpwpgwwxgptegpdl.supabase.co"

export default function uploadMediaToSupabase(file){
   
    return new Promise((resolve,reject)=>{
        if(file == null){
            reject("File is not addded")
        }

        //check file type and split
        let fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length-1]

        //to connect supabase
        const supabase = createClient(url,key)

        //to get an unique name because pictures with same names cannot upload. 
        const timeStamp = new Date().getTime()

        fileName = timeStamp + "." + extension

        supabase.storage.from("images").upload(fileName,
            file,{
                cacheControl : "3600",
                upsert : false
            }).then((res)=>{
                const PublicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.PublicUrl;
                resolve(PublicUrl);
            }).catch((err)=>{
                reject(err);
            });
    });

}


//if(extension != "jpg" && extension != "png"){
//    alert("Please select a jpg or png file")
//    return
//}
