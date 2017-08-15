import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowDetails} from '../show';

import {remoteParseFeed} from '../../store/actions';
import {UrlInput} from '../parser/UrlInput';

class ParserView extends Component {
    _renderBody() {
        const {show} = this.props;
        if (show) {
            return <ShowDetails show={show}/>;
        }

        return <UrlInput onChange={text => console.log(text)}/>;
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