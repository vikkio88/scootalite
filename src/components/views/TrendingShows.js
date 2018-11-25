import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowCard} from '../show';
import Masonry from 'react-masonry-component';

import {remoteFetchTrends} from '../../store/actions';

import './TrendingShows.css';
import {Spinner} from "../common";


class TrendingShowsView extends Component {
    state = {
        filter: 0
    };

    componentWillMount() {
        this.props.remoteFetchTrends();
    }

    render() {
        const {trendingShows} = this.props;
        if (!trendingShows.length) {
            return <Spinner/>;
        }

        return (
            <Masonry>
                {trendingShows.map(s => <ShowCard key={s.id} show={s}/>)}
            </Masonry>
        )
    }
}

const mapStateToProps = ({podcasts}) => {
    const {trendingShows} = podcasts;
    return {
        trendingShows
    };
};

const mapDispatchToProps = dispatch => {
    return {
        remoteFetchTrends() {
            dispatch(remoteFetchTrends())
        }
    };
};

const TrendingShows = connect(
    mapStateToProps, mapDispatchToProps
)(TrendingShowsView);


export {TrendingShows};
