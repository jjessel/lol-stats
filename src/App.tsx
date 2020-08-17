import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Characters from './components/Characters';

import './App.css';

class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router>
                <main>
                    <div className="app">
                        <Header
                            items={[
                                { name: 'Home', path: '/' },
                                { name: 'Champions', path: '/champions' },
                            ]}
                        />
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/champions" component={Characters} />
                </main>
            </Router>
        );
    }
}

export default App;
