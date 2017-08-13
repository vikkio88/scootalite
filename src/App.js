import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Content, Header, HeaderRow, Layout} from 'react-mdl';

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
                    <Layout fixedHeader>
                        <Header style={{backgroundColor: '#eeeeee'}}>
                            <HeaderRow
                                title={<Link to="/">
                                    <img src={logo} style={{height: '50px'}} alt="scootalite logo"/>
                                </Link>}
                            >
                                {/*
                                 <Navigation>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 </Navigation>
                                 */}
                            </HeaderRow>
                        </Header>
                        <Player/>
                        <Content className="app-body">
                            <div className="app-content">
                                <Route exact path="/" component={TrendingShows}/>
                                <Route path="/shows/:slug" component={Show}/>
                            </div>
                        </Content>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
