import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Content, Header, IconButton, Layout, Navigation, Tooltip} from 'react-mdl';

import {Player} from './components/player';
import {SnackbarMessage} from './components/notification';
import {TrendingShows, Show, Parser, About, Podcast} from './components/views';

import './App.css';
import logo from './resources/images/main-logo.svg';

import {store} from './store';
import {services} from './libs/services';

class App extends Component {
    componentWillMount() {
        services.stats.push('MAIN');
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout fixedHeader>
                        <Header
                            style={{backgroundColor: '#eeeeee'}}
                            title={(
                                <Link to="/">
                                    <img src={logo} style={{height: '50px'}} alt="scootalite logo"/>
                                </Link>
                            )}
                        >
                            <Navigation>
                                <Tooltip label="Rss Feed Parser">
                                    <Link to="/parser">
                                        <IconButton className="navigation-bar-link" name="rss_feed"/>
                                    </Link>
                                </Tooltip>
                                <Tooltip label="About">
                                    <Link to="/about">
                                        <IconButton className="navigation-bar-link" name="info_outline"/>
                                    </Link>
                                </Tooltip>
                            </Navigation>
                        </Header>
                        <Player/>
                        <Content className="app-content">
                            <Route exact path="/" component={TrendingShows}/>
                            <Route path="/shows/:slug" component={Show}/>
                            <Route path="/parser" component={Parser}/>
                            <Route path="/about" component={About}/>
                            <Route path="/podcasts/:slug" component={Podcast}/>
                        </Content>
                        <SnackbarMessage/>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
