import React from 'react';
import "./home.css"

export default function Home() {
    return (
        <section className="container" id="home">
            <div className="content">
                <h1 className="my-name">
                    Ahmad Muzakki
                </h1>
                <h2 className="my-subject">
                    Fullstack Developer and Problem Solver
                </h2>
                <ul className="my-social-media">
                    <li>
                        <a href="https://github.com/dzakki" rel="nofollow noopener noreferrer" target="_blank" >Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dzakki" rel="nofollow noopener noreferrer" target="_blank">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}