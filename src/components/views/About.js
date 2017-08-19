import React, {Component} from 'react';
import {Button, Icon} from "react-mdl";
import {services} from '../../libs/services/';
import './About.css';
import logo from '../../resources/images/main-logo.svg';

class About extends Component {
    componentWillMount() {
        services.stats.push('BROWSE about');
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1 style={{marginBottom: '3px'}}>Scootalite</h1>
                    <strong>made with ♥ by <a href="https://vikkio.co" target="_blank"
                                              rel="noopener noreferrer">vikkio</a></strong>
                </div>
                <div style={{marginTop: '15px', textAlign: 'center'}}>
                    <Button raised ripple
                            onClick={() => window.open('https://github.com/vikkio88/scootalite', '_blank')}
                    >
                        <Icon name="code"/>
                        Codebase
                    </Button>
                    <Button raised ripple
                            onClick={() => window.open('https://github.com/vikkio88/scootalite/issues/new', '_blank')}
                    >
                        <Icon name="lightbulb_outline"/>
                        Request a Feature
                    </Button>
                    <Button raised ripple
                            onClick={() => window.open('https://github.com/vikkio88/scootalite/issues/new', '_blank')}
                    >
                        <Icon name="bug_report"/>
                        Report a bug
                    </Button>
                </div>
                <div className="about-text">
                    <p>
                        This is <strong>Scootalite</strong>, a small side project of mine, it will be a podcast
                        player/manager.
                    </p>
                    <p>At the moment I am planning just to show some free random podcasts. You will be able to parse rss
                        feed and see them in a more user-friendly way.</p>
                    <p>The web app is written in <a href="https://facebook.github.io/react" target="_blank"
                                                    rel="noopener noreferrer">react.js</a>,
                        the backend in <strong>php7</strong> using an enhanced version of <a
                            href="https://www.slimframework.com/" target="_blank" rel="noopener noreferrer">slim</a>, my
                        very own <a
                            href="https://github.com/vikkio88/slime" target="_blank" rel="noopener noreferrer">slime</a>.
                    </p>
                    <p>Soon I will add the option to create a custom library by adding your favourite RSS feeds, saving
                        position, history, trends... and much more</p>
                    <p>I will always keep everything open-source, and if you are a computer geek and you want to
                        collaborate with this project just check out the <a
                            href="https://github.com/vikkio88/scootalite" target="_blank"
                            rel="noopener noreferrer">code</a>.</p>
                </div>
                <div className="logo-wrapper">
                    <img src={logo} className="logo" alt="scootalite logo"/>
                    <p>
                        logo designed by <strong>
                        <a href="https://www.facebook.com/LikasDesign "
                           target="_blank" rel="noopener noreferrer">Salvatore Li Causi</a>
                    </strong>
                    </p>
                </div>
            </div>
        );
    }
}

export {About};