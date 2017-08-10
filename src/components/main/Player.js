import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import moment from 'moment';
import {Button, Icon} from "react-mdl";

import {selectPodcast} from '../../store/actions';


import './Player.css';

class PlayerView extends Component {
    player = null;
    state = {
        playing: false,
        duration: 0,
        progress: 0,
        played: 0,
        seeking: false,
        expanded: true
    };

    onPlay = () => {
        console.log('play');
        this.setState({playing: true});
    };

    onPause = () => {
        console.log('pause');
        this.setState({playing: false});
    };

    onEnded = () => {
        console.log('ended');
        this.setState({playing: false});
    };

    onProgress = state => {
        if (!this.state.seeking) {
            this.setState(state);
        }
    };
    onSeekMouseDown = () => {
        this.setState({seeking: true});
    };
    onSeekChange = e => {
        this.setState({played: parseFloat(e.target.value)});
    };
    onSeekMouseUp = e => {
        this.setState({seeking: false});
        this.player.seekTo(parseFloat(e.target.value))
    };
    seek = diff => {
        const {duration, played} = this.state;
        this.player.seekTo(parseFloat(duration * played + diff));
    };

    render() {
        const {selectedPodcast} = this.props;
        const {playing, played, duration, expanded} = this.state;

        if (!selectedPodcast) {
            return <div/>
        }

        return (
            <div className="player-wrapper">
                <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                    <Button ripple onClick={() => this.setState({expanded: !expanded})}>
                        <Icon className="player-control" name={expanded ? 'expand_less' : 'expand_more'}/>
                    </Button>
                    <Button ripple onClick={() => this.props.stop()}>
                        <Icon className="player-control" name="close"/>
                    </Button>
                </div>
                { expanded &&
                <div>
                    <h4 className="time-indicator">{`${timeParse(duration * played)} - ${timeParse(duration)}`}</h4>
                </div>
                }
                <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}
                />
                {expanded &&
                <div>
                    <Button ripple raised disabled={!playing} onClick={() => this.seek(-10)}>
                        <Icon className="player-control" name="replay_10"/>
                    </Button>
                    <Button ripple raised onClick={() => this.setState({playing: !playing})}>
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
                    width='100%'
                    height='100%'
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
    const {selectedPodcast} = player;
    return {
        selectedPodcast
    };
};

const mapDispatchToProps = dispatch => {
    return {
        stop(){
            dispatch(selectPodcast());
        }
    };
};

const Player = connect(
    mapStateToProps, mapDispatchToProps
)(PlayerView);


export {Player};