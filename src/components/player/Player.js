import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import moment from 'moment';
import {Button, Icon} from "react-mdl";

import {play, stop, pause} from '../../store/actions';


import './Player.css';

class PlayerView extends Component {
    player = null;
    state = {
        duration: 0,
        progress: 0,
        played: 0,
        seeking: false,
        expanded: true,
        originalTitle: null
    };

    togglePlay = () => {
        const {playing, play, pause} = this.props;
        if (playing) {
            pause();
        } else {
            play();
        }
    };

    play = () => {
        this.props.play();
    };

    stop = () => {
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

    render() {
        const {selectedPodcast, playing} = this.props;
        const {played, duration, expanded} = this.state;
        if (!selectedPodcast) {
            return <div/>
        }

        return (
            <div className="player-wrapper">
                <div className="player-head">
                    <div className="player-head-title">
                        {!expanded ? `${selectedPodcast.show.name} - ${selectedPodcast.name}` : ''}
                    </div>
                    <div className="player-head-actions">
                        <a onClick={() => this.setState({expanded: !expanded})}>
                            <Icon className="player-control" name={expanded ? 'expand_less' : 'expand_more'}/>
                        </a>
                        <a onClick={this.stop}>
                            <Icon className="player-control" name="close"/>
                        </a>
                    </div>
                </div>
                { expanded &&
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
                    onReady={() => console.log('onReady')}
                    onProgress={this.onProgress}
                    onDuration={duration => this.setState({duration})}
                    onStart={() => console.log('onStart')}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    onBuffer={() => console.log('onBuffer')}
                    onEnded={this.onEnded}
                    onError={e => console.log('onError', e)}
                />
            </div>
        );
    }
}

const timeParse = duration => moment.utc(duration * 1000).format("HH:mm:ss");

const mapStateToProps = ({player}) => {
    const {selectedPodcast, playing} = player;
    return {
        selectedPodcast,
        playing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        play(){
            dispatch(play());
        },
        pause(){
            dispatch(pause());
        },
        stop(){
            dispatch(stop());
        },
    };
};

const Player = connect(
    mapStateToProps, mapDispatchToProps
)(PlayerView);


export {Player};