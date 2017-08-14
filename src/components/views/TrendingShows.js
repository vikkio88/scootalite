import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowCard} from '../show';
import {Cell, Grid, Spinner} from 'react-mdl';

import {remoteFetchTrends} from '../../store/actions';


class TrendingShowsView extends Component {
    componentWillMount() {
        this.props.remoteFetchTrends();
    }

    _renderBody() {
        const {trendingShows} = this.props;
        if (!trendingShows.length) {
            return <Spinner />;
        }

        return (
            <Grid>
                {this._renderShowCards(trendingShows)}
            </Grid>
        )
    }

    _renderShowCards(trendingShows) {
        return trendingShows.map(s => (
            <Cell col={4} key={s.id}>
                <ShowCard show={s}/>
            </Cell>
        ));
    }

    render() {
        return (
            <div>
                <div>
                    {this._renderBody()}
                </div>
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
        remoteFetchTrends(){
            dispatch(remoteFetchTrends())
        }
    };
};

const TrendingShows = connect(
    mapStateToProps, mapDispatchToProps
)(TrendingShowsView);


export {TrendingShows};