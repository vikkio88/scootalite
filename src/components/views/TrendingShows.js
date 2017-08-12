import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowCard} from "../show";
import {Cell, Grid} from 'react-mdl';


class TrendingShowsView extends Component {
    _renderShowCards() {
        const {trendingShows} = this.props;
        if (!trendingShows.length) {
            return <div>No shows found</div>;
        }
        return trendingShows.map(s => (
            <Cell col={4} key={s.id}>
                <ShowCard show={s}/>
            </Cell>
        ));
    }

    render() {
        return (
            <div>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Grid>
                        {this._renderShowCards()}
                    </Grid>
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
    return {};
};

const TrendingShows = connect(
    mapStateToProps, mapDispatchToProps
)(TrendingShowsView);


export {TrendingShows};