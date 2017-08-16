import React, {Component} from 'react';
import isUrl from 'validator/lib/isURL';
import {withRouter} from 'react-router-dom';

import {UrlInput} from '../parser/UrlInput';
import {Button, Spinner} from "react-mdl";

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
            <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                <UrlInput onChange={e => this.setState({valid: isUrl(e.target.value), feed: e.target.value})}/>
                {valid &&
                <Button style={{width: '100px', margin: 'auto'}} raised ripple onClick={this.parse}>Parse</Button>}
            </div>
        );
    }

    render() {
        return this._renderBody();
    }
}

const Parser = withRouter(ParserView);
export {Parser};