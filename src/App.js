import React, {Component} from 'react';
import {Player} from "./components/main/Player";

import './App.css';
import logo from './resources/images/main-logo.svg';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} style={{height: '80px'}}/>
                </div>
                <div className="App-intro">
                    <Player/>
                </div>
            </div>
        );
    }
}

export default App;
