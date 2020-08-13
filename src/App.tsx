import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Characters from './components/Characters';
import jsonObj from './jsonData/champion.json';

import './App.css';
import { Champion } from './models/Champion';

class App extends React.Component {
    champions: Champion[] = [];

    componentDidMount(): void {
        this.champions = Object.values(jsonObj.data).map((item) => {
            return item as Champion;
        });
    }

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
                    <Route path="/champions" component={(): JSX.Element => <Characters champions={this.champions} />} />
                </main>
            </Router>
        );
    }
}

export default App;
