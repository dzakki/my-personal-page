import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Close from './Close';
import Home from '../containers/Home';
import About from '../containers/About';

export default function Main() {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%"
            }}>
                <Navbar />
                <div style={{
                    flex: 1,
                    display: "flex",
                    marginTop: "1.9rem",
                }}>
                    <Switch>
                        <Route exact path="/" >
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-end"
                }}>
                    <Close />
                </div>
            </div>
        </>
    )
}