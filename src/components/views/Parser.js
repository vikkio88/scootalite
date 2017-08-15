import React, {Component} from 'react';
import {connect} from 'react-redux';
import isUrl from 'validator/lib/isURL';

import {ShowDetails} from '../show';
import {UrlInput} from '../parser/UrlInput';

import {remoteParseFeed} from '../../store/actions';
import {Button, Spinner} from "react-mdl";


class ParserView extends Component {
    state = {
        valid: false,
        loading: false
    };

    _renderBody() {
        if (this.state.loading) {
            return <Spinner />
        }
        const {show} = this.props;
        if (show) {
            return <ShowDetails show={show}/>;
        }

        return (
            <div style={{textAlign: 'center'}}>
                <UrlInput onChange={e => this.setState({valid: isUrl(e.target.value)})}/>
                {this.state.valid && <Button raised ripple> Parse</Button>}
            </div>
        );
    }

    render() {
        return this._renderBody();
    }
}

const mapStateToProps = ({podcasts}) => {
    const {show} = podcasts;
    return {
        show
    };
};

const mapDispatchToProps = dispatch => {
    return {
        parse(feed){
            dispatch(remoteParseFeed(feed));
        }
    };
};

const Parser = connect(
    mapStateToProps, mapDispatchToProps
)(ParserView);


export {Parser};