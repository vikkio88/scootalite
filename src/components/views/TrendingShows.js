import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ShowCard} from '../show';
import {Button, Cell, Grid, Spinner} from 'react-mdl';

import {categories, byCategory} from '../../config';
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
            return <Spinner />;
        }

        return (
            <div>
                <Grid>
                    {this._renderShowCards()}
                </Grid>
            </div>
        )
    }

    _renderFilters() {
        return categories.map((c, i) => (
            <Button
                key={i}
                raised={this.state.filter === i}
                ripple
                onClick={() => {
                    let filter = i;
                    if (this.state.filter === i) {
                        filter = 0;
                    }
                    this.setState({filter});
                }}
            >
                {`${c}`}
            </Button>
        ));
    }

    _renderShowCards() {
        const category = categories[this.state.filter];
        return this.props.trendingShows.filter(byCategory(category)).map(s => (
            <Cell col={4} key={s.id}>
                <ShowCard show={s}/>
            </Cell>
        ));
    }

    render() {
        return (
            <div>
                <div className="categories-wrapper">
                    {this._renderFilters()}
                </div>
                <div style={{flex: 1}}>
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