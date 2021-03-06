import React, {Component} from 'react';
import {connect} from 'react-redux';
import {services} from '../../libs/services/';
import {remoteFetchPodcast} from '../../store/actions';
import './Podcast.css';
import logo from '../../resources/images/main-logo.svg';
import {valueFromQuery} from "../../libs/utils";

class PodcastView extends Component {
    componentWillMount() {
        services.stats.push(`BROWSE podcast-trigger ${this.props.match.params.slug}`);
    }

    componentDidMount() {
        const {remoteFetchPodcast, match, history, location} = this.props;
        const initialSeek = valueFromQuery(location.search, 't', v => parseInt(v, 10));
        remoteFetchPodcast(match.params.slug, initialSeek);
        history.push(`/`);
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h2 style={{marginBottom: '3px'}}>Loading your podcast...</h2>
                </div>
                <div className="logo-wrapper">
                    <img src={logo} className="logo" alt="scootalite logo"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        remoteFetchPodcast(slug, initialSeek) {
            dispatch(remoteFetchPodcast(slug, initialSeek));
        }
    };
};
const Podcast = connect(mapStateToProps, mapDispatchToProps)(PodcastView);
export {Podcast};
