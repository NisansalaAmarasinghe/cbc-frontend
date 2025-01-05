import React from 'react';
import './homePage.css';

export default function HomePage() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to My Website</h1>
                <p>Your one-stop solution for [insert purpose of website].</p>
            </header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <main>
                <section id="about">
                    <h2>About Us</h2>
                    <p>Learn more about what we do and how we can help you achieve your goals.</p>
                </section>
                <section id="services">
                    <h2>Our Services</h2>
                    <p>Explore the wide range of services we offer to cater to your needs.</p>
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out if you have any questions or need support!</p>
                </section>
            </main>
            <footer>
                <p>© 2024 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
