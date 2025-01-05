import React from 'react';
import './homePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="home-container">
           
                <h1>Welcome to My Website</h1>
                <p>Your one-stop solution for insert purpose of website.</p>
            <button onClick={()=> alert ('Button Clicked!')}>Get Started</button>
           
           <Link to="/Login">Login</Link>
        </div>
    );
}
