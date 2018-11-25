import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardMenu, CardText, CardTitle, IconButton, List, Tooltip} from 'react-mdl';
import {PodcastListItem} from '../podcast';

import {humanizeTimeDiffFromNow} from '../../libs/utils';
import {remoteFetchMorePodcasts, remoteParseFeed} from '../../store/actions';

import './ShowDetails.css';
import {services} from '../../libs/services/';


class ShowDetailsView extends Component {
    state = {
        page: 1
    };

    componentWillMount() {
        services.stats.push(`BROWSE show ${this.props.show.slug}`);
    }

    morePodcasts = () => {
        const page = this.state.page + 1;
        this.props.morePodcasts(this.props.show.id, page);
        this.setState({page});
    };
    refresh = () => {
        this.setState({page: 1});
        this.props.refreshFeed(this.props.show.feed_url);
    };

    _renderPodcasts() {
        const {show} = this.props;
        if (!show || !show.podcasts.length) {
            return <p>No podcasts</p>
        }
        return show.podcasts.map(p => <PodcastListItem key={p.id} podcast={p}/>)
    }

    _renderMoreButton() {
        if (this.props.show.podcasts.length && this.state.page >= 1) {
            return <Button ripple raised onClick={this.morePodcasts}>More</Button>
        }
    }

    render() {
        const {show} = this.props;
        return (
            <div>
                <Card shadow={1} style={{width: '100%'}}>
                    <CardTitle style={{
                        color: '#fff',
                        textShadow: '2px 1px 2px black',
                        height: '300px',
                        background: `url(${show.logo_url}) center / cover`,
                    }}>
                        {show.name}
                    </CardTitle>
                    <CardText>
                        <p className="updated-info-wrapper">
                            Last update: {humanizeTimeDiffFromNow(show.updated_at)}
                        </p>
                        <p className="show-description-wrapper">
                            {show.description}
                        </p>
                    </CardText>
                    <CardMenu style={{color: '#FF6749', backgroundColor: '#eeeeee', opacity: 0.6}}>
                        <Tooltip label={`${show.name} - website`}>
                            <a href={show.website} target="_blank">
                                <IconButton name="link"/>
                            </a>
                        </Tooltip>
                        <Tooltip label="Update Feed">
                            <IconButton name="refresh" onClick={this.refresh}/>
                        </Tooltip>
                    </CardMenu>
                </Card>
                <h4>Podcasts</h4>
                <List>
                    {this._renderPodcasts()}
                </List>
                <div className="bottom-of-list">
                    {this._renderMoreButton()}
                </div>
            </div>
        );
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
        morePodcasts(id, page) {
            dispatch(remoteFetchMorePodcasts(id, page));
        },
        refreshFeed(url) {
            dispatch(remoteParseFeed(url));
        }
    };
};

const ShowDetails = connect(
    mapStateToProps, mapDispatchToProps
)(ShowDetailsView);

export {ShowDetails};
