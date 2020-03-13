import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Main from './components/Main';

export default function RootRouter () {
    return (
        <Router>
            <Main />
        </Router>
    )
}