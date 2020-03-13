import React from 'react';
import './close.css';

export default function Close() {

    return (
        <footer className="container footer-wrapper">
            <section>
                <p>
                    © { new Date().getFullYear() } . Created by <a href="https://github.com/dzakki" rel="nofollow noopener noreferrer" target="_blank">Dzakki</a> with inspiration by  <a href="https://gohugo.io/" rel="nofollow noopener noreferrer" target="_blank"> Hugo </a>
                </p>
            </section>
        </footer>
    )
}