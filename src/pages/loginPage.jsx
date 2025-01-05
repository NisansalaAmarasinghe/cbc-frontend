
import { Link } from 'react-router-dom';

export default function LoginPage(){
    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter your username"/>
            <input type="password" placeholder="Enter your password"/>
            <button className='bg-yellow-500 m-10'>Login</button>
            <button className='bg-yellow-500 p-10'>Login</button>
            
            <Link to="/">Home</Link>
        </div>

        )
}