import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {Player} from './components/player';
import {TrendingShows, Show} from './components/views';

import './App.css';
import logo from './resources/images/main-logo.svg';

import {store} from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="app">
                        <div className="app-header">
                            <Link to="/">
                                <img src={logo} style={{height: '80px'}} alt="scootalite logo"/>
                            </Link>
                        </div>
                        <Player/>
                        <div className="app-body">
                            <div>
                                <Route exact path="/" component={TrendingShows}/>
                                <Route path="/shows/:slug" component={Show}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
