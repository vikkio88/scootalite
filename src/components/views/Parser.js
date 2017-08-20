import React, {Component} from 'react';
import isUrl from 'validator/lib/isURL';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {UrlInput} from '../parser/UrlInput';
import {Button, Icon, Spinner} from "react-mdl";

import {services} from '../../libs/services';
import {flashError} from '../../store/actions';

class ParserView extends Component {
    state = {
        valid: false,
        loading: false,
        feed: null,
        show: null
    };

    componentWillMount() {
        services.stats.push('BROWSE parser');
    }

    parse = () => {
        this.setState({loading: true});
        services.stats.push(`PARSE_REQUEST ${this.state.feed}`);
        services.show.parse(this.state.feed)
            .then(show => {
                this.setState({show, loading: false});
                this.props.history.push(`/shows/${show.slug}`);
            })
            .catch(error => {
                this.props.flashError('Invalid or Malformed RSS Feed');
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
const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        flashError(message) {
            dispatch(flashError(message));
        }
    };
};
const Parser = connect(mapStateToProps, mapDispatchToProps)(withRouter(ParserView));
export {Parser};