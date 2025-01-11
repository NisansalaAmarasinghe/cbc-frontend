import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {

    const [email,setEmail]=useState("Your email")
    const [password,setPassword]=useState("")

    return (
        <div className='flex justify-center items-center w-full h-screen bg-purple-300'>
            <div className='flex flex-col justify-center items-center w-[450px] h-[450px] bg-purple-500 border border-black'>
            <img src='/logo.png' className='rounded-full w-[100px]'/>
            
            <span>Email</span>
            <input defaultValue={email} onChange={(e)=>
            {
                console.log(e.target.value)

            }
            } />
            
            <span>Password</span>
            <input type="password" defaultValue={password}/>
            
            <button className='bg-white'>Login</button>
            </div>

        </div>
    );
}
