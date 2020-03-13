import React from 'react';
import './navbar.css';
export default function Navbar() {
    return (
        <nav className="navigation">
            <section className="container navigation-wrapper">
                <a href="/" className="navigation-title">Dzakki</a>
                <ul>
                    <li>
                        <a href="/#">Posts</a>
                    </li>
                    <li>
                        <a href="/#">About</a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}