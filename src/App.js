import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Content, Header, HeaderRow, IconButton, Layout, Navigation} from 'react-mdl';

import {Player} from './components/player';
import {TrendingShows, Show, Parser} from './components/views';

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
                                <Navigation>
                                    <Link to="/parser">
                                        <IconButton className="navigation-bar-link" name="rss_feed"/>
                                    </Link>
                                </Navigation>
                            </HeaderRow>
                        </Header>
                        <Player/>
                        <Content className="app-body">
                            <div className="app-content">
                                <Route exact path="/" component={TrendingShows}/>
                                <Route path="/shows/:slug" component={Show}/>
                                <Route path="/parser" component={Parser}/>
                            </div>
                        </Content>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
