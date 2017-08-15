import React, {Component} from 'react';
import {connect} from 'react-redux';

import {remoteFetchShow, resetShow} from '../../store/actions';
import {Spinner} from 'react-mdl';
import {ShowDetails} from '../show';


class ShowView extends Component {
    componentWillMount() {
        const {remoteFetchShow, match} = this.props;
        remoteFetchShow(match.params.slug)
    }

    componentWillUnmount() {
        this.props.resetShow();
    }

    _renderBody() {
        const {show} = this.props;
        if (!show) {
            return <Spinner />;
        }

        return (
            <ShowDetails show={show}/>
        );
    }

    render() {
        return (
            <div>
                {this._renderBody()}
            </div>
        )
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
        remoteFetchShow(slug) {
            dispatch(remoteFetchShow(slug));
        },
        resetShow() {
            dispatch(resetShow());
        }
    };
};

const Show = connect(
    mapStateToProps, mapDispatchToProps
)(ShowView);


export {Show};