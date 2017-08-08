import React, {Component} from 'react';
import './App.css';
import {Player} from "./components/main/Player";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Scootalite</h2>
                </div>
                <p className="App-intro">
                    <Player/>
                </p>
            </div>
        );
    }
}

export default App;
