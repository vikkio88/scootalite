import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Player} from './components/player';
import {TrendingShows} from './components/views';

import './App.css';
import logo from './resources/images/main-logo.svg';

import {store} from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <div className="app-header">
                        <img src={logo} style={{height: '80px'}} alt="scootalite logo"/>
                    </div>
                    <div>
                        <Player/>
                        <TrendingShows />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
