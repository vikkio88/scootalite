import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import moment from 'moment';
import {Button, Icon} from "react-mdl";
import hotkeys from 'hotkeys-js';
import {ShareDialog} from "../dialog";

import {play, stop, pause, pushPlayed} from '../../store/actions';


import './Player.css';
import {historyHelper} from "../../libs/utils/historyHelper";

class PlayerView extends Component {
    player = null;
    registered = false;
    state = {
        duration: 0,
        progress: 0,
        played: 0,
        seeking: false,
        expanded: true,
        originalTitle: null,
        shareActive: false,
        addTime: true
    };

    componentWillMount() {
        hotkeys('p', () => this.togglePlay());
        window.addEventListener('beforeunload', this.saveLastPlayed);
    }

    componentWillUnmount() {
        hotkeys.unbind('p');
        window.removeEventListener('beforeunload', this.saveLastPlayed);
    }

    saveLastPlayed = () => {
        const {selectedPodcast} = this.props;
        const {played, duration} = this.state;
        historyHelper().saveLastPlayed(selectedPodcast, duration * played);
    };

    togglePlay = () => {
        const {playing, play, pause, selectedPodcast, pushToHistory} = this.props;
        if (!selectedPodcast) {
            return;
        }
        playing ? pause() : play();
        if (!this.registered) {
            pushToHistory(selectedPodcast);
            this.registered = true;
        }
    };

    play = () => {
        this.props.play();
    };

    stop = () => {
        this.saveLastPlayed();
        this.props.stop();
    };

    onPlay = () => {
        this.props.play();
    };

    onPause = () => {
        this.props.pause();
    };

    onEnded = () => {
        this.props.pause();
    };

    onProgress = state => {
        if (!this.state.seeking) {
            this.setState(state);
        }
    };
    onStart = () => {
        const {initialSeek} = this.props;
        if (initialSeek) {
            this.player.seekTo(initialSeek)
        }
    };

    onSeekStart = () => {
        this.setState({seeking: true});
    };
    onSeekChange = e => {
        this.setState({played: parseFloat(e.target.value)});
    };
    onSeekStop = e => {
        this.setState({seeking: false});
        this.player.seekTo(parseFloat(e.target.value))
    };
    seek = diff => {
        const {duration, played} = this.state;
        this.player.seekTo(parseFloat(duration * played + diff));
    };

    toggleTime = () => {
        this.setState({addTime: !this.state.addTime});
    };

    shareOpen = () => {
        this.onPause();
        this.setState({shareActive: true});
    };

    shareClose = () => {
        this.setState({shareActive: false});
    };

    render() {
        const {selectedPodcast, playing} = this.props;
        const {played, duration, expanded, shareActive, addTime} = this.state;
        if (!selectedPodcast) {
            return <div/>
        }

        return (
            <div className="player-wrapper">
                <div className="player-head">
                    <div className="player-head-actions">
                        <a onClick={this.stop}>
                            <Icon className="player-control" name="close"/>
                        </a>
                        <a onClick={() => this.setState({expanded: !expanded})}>
                            <Icon className="player-control" name={expanded ? 'expand_less' : 'expand_more'}/>
                        </a>
                        <a onClick={this.shareOpen}>
                            <Icon className="player-control" name="share"/>
                        </a>
                    </div>
                    <div className="player-head-title">
                        {!expanded ? `${`${timeParse(duration * played)} - ${timeParse(duration)}`} - ${selectedPodcast.show.name} - ${selectedPodcast.name}` : ''}
                    </div>
                </div>
                {expanded &&
                <div className="podcast-info">
                    <p className="podcast-title">{`${selectedPodcast.show.name} - ${selectedPodcast.name}`}</p>
                    <p className="time-indicator">{`${timeParse(duration * played)} - ${timeParse(duration)}`}</p>
                </div>
                }
                <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.onSeekStart}
                    onTouchStart={this.onSeekStart}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekStop}
                    onTouchEnd={this.onSeekStop}
                />
                {expanded &&
                <div>
                    <Button ripple raised disabled={!playing} onClick={() => this.seek(-10)}>
                        <Icon className="player-control" name="replay_10"/>
                    </Button>
                    <Button ripple raised onClick={this.togglePlay}>
                        <Icon className="player-control" name={!playing ? 'play_arrow' : 'pause'}/>
                    </Button>
                    <Button ripple raised disabled={!playing} onClick={() => this.seek(10)}>
                        <Icon className="player-control" name="forward_10"/>
                    </Button>
                </div>
                }
                <ReactPlayer
                    ref={player => {
                        this.player = player
                    }}
                    className='react-player'
                    width='0'
                    height='0'
                    url={selectedPodcast.file_url}
                    playing={playing}
                    onReady={() => this.setState({ready: true})}
                    onProgress={this.onProgress}
                    onDuration={duration => this.setState({duration})}
                    onStart={this.onStart}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    onBuffer={() => console.log('onBuffer')}
                    onEnded={this.onEnded}
                    onError={e => console.log('onError', e)}
                />
                <ShareDialog
                    isActive={shareActive}
                    addTime={addTime}
                    onClose={this.shareClose}
                    toggleTime={this.toggleTime}
                    url={
                        `${window.location.protocol}//${window.location.host}/podcasts/${selectedPodcast.slug}${addTime ? `?t=${parseInt(duration * played, 10)}` : ''}`
                    }/>
            </div>
        );
    }
}

const timeParse = duration => moment.utc(duration * 1000).format("HH:mm:ss");

const mapStateToProps = ({player}) => {
    const {selectedPodcast, playing, initialSeek} = player;
    return {
        selectedPodcast,
        playing,
        initialSeek
    };
};

const mapDispatchToProps = dispatch => {
    return {
        play() {
            dispatch(play());
        },
        pause() {
            dispatch(pause());
        },
        stop() {
            dispatch(stop());
        },
        pushToHistory(podcast) {
            dispatch(pushPlayed(podcast))
        }
    };
};

const Player = connect(
    mapStateToProps, mapDispatchToProps
)(PlayerView);


export {Player};
