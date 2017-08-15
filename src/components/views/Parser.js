import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowCard} from '../show';
import {Cell, Grid, Spinner} from 'react-mdl';

import {remoteFetchTrends} from '../../store/actions';


class ParserView extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Parser</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({}) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

const Parser = connect(
    mapStateToProps, mapDispatchToProps
)(ParserView);


export {Parser};