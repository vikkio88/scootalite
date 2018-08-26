import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowCard} from '../show';
import {Spinner} from 'react-mdl';
import Masonry from 'react-masonry-component';

import {remoteFetchTrends} from '../../store/actions';

import './TrendingShows.css';


class TrendingShowsView extends Component {
    state = {
        filter: 0
    };

    componentWillMount() {
        this.props.remoteFetchTrends();
    }

    _renderBody() {
        const {trendingShows} = this.props;
        if (!trendingShows.length) {
            return <Spinner/>;
        }

        return (
            <Masonry>
                {this.props.trendingShows.map(s => <ShowCard key={s.id} show={s}/>)}
            </Masonry>
        )
    }

    render() {
        return (
            <div style={{flex: 1}}>
                {this._renderBody()}
            </div>
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
