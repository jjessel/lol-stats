import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Characters from './components/Characters';

import './App.css';
// 0BC6E3 blue color

function App() {
    return (
        <Router>
            <main>
                <div className="app">
                    <Header items={['Characters']} />
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/characters" component={Characters} />
            </main>
        </Router>
    );
}

export default App;
