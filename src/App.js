import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Player} from './components/main/Player';

import './App.css';
import logo from './resources/images/main-logo.svg';

import {store} from './store';
import {Button} from "react-mdl";


import {selectPodcast} from './store/actions';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} style={{height: '80px'}} alt="scootalite logo"/>
                    </div>
                    <div className="App-intro">
                        <Player/>

                        <Button raised
                                onClick={() => store.dispatch(selectPodcast({file_url: 'http://rss.art19.com/episodes/a0bc6544-9833-4975-915a-dbfdfda8316d.mp3'}))}>
                            Stuff
                        </Button>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
