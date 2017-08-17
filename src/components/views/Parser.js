import React, {Component} from 'react';
import isUrl from 'validator/lib/isURL';
import {withRouter} from 'react-router-dom';

import {UrlInput} from '../parser/UrlInput';
import {Button, Icon, Spinner} from "react-mdl";

import {services} from '../../libs/services';

class ParserView extends Component {
    state = {
        valid: false,
        loading: false,
        feed: null,
        show: null
    };

    parse = () => {
        this.setState({loading: true});
        services.show.parse(this.state.feed)
            .then(show => {
                this.setState({show, loading: false});
                this.props.history.push(`/shows/${show.slug}`);
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            });
    };

    _renderBody() {
        const {loading, valid} = this.state;
        if (loading) {
            return <Spinner/>
        }
        return (
            <div>
                <UrlInput onChange={e => this.setState({valid: isUrl(e.target.value), feed: e.target.value})}/>
                {
                    valid &&
                    <div>
                        <Button raised ripple onClick={this.parse}>
                            <Icon name="send" style={{marginRight: '4px'}}/>
                            Parse
                        </Button>
                    </div>
                }
            </div>
        );
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Rss Feed Parser</h2>
                <div>Paste the <strong>rss feed</strong> link on here, to add it to the <strong>
                    Scootalite</strong> library
                </div>
                {this._renderBody()}
            </div>
        );
    }
}

const Parser = withRouter(ParserView);
export {Parser};