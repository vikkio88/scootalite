import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
import {Button, Icon} from "react-mdl";


import './Player.css';

class Player extends Component {
    player = null;
    state = {
        url: 'http://rss.art19.com/episodes/a0bc6544-9833-4975-915a-dbfdfda8316d.mp3',
        playing: false,
        duration: 0,
        progress: 0,
        played: 0,
        seeking: false
    };

    onProgress = state => {
        if (!this.state.seeking) {
            this.setState(state);
        }
    };
    onSeekMouseDown = e => {
        this.setState({seeking: true});
    };
    onSeekChange = e => {
        this.setState({played: parseFloat(e.target.value)});
    };
    onSeekMouseUp = e => {
        this.setState({seeking: false});
        this.player.seekTo(parseFloat(e.target.value))
    };

    render() {
        const {url, playing, played, duration} = this.state;
        return (
            <div className="player-wrapper">
                <h3 className="time-indicator">{`${timeParse(duration * played)} - ${timeParse(duration)}`}</h3>
                <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}
                />
                <div>
                    <Button ripple onClick={() => this.setState({playing: !playing})}>
                        <Icon className="player-control" name={!playing ? 'play_arrow' : 'pause'}/>
                    </Button>
                </div>
                <ReactPlayer
                    ref={player => {
                        this.player = player
                    }}
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={url}
                    playing={playing}
                    onReady={() => console.log('onReady')}
                    onProgress={this.onProgress}
                    onDuration={duration => this.setState({duration})}
                    onStart={() => console.log('onStart')}
                    onPlay={() => this.setState({playing: true})}
                    onPause={() => this.setState({playing: false})}
                    onBuffer={() => console.log('onBuffer')}
                    onEnded={() => this.setState({playing: false})}
                    onError={e => console.log('onError', e)}
                />
            </div>
        );
    }
}

const timeParse = duration => moment.utc(duration * 1000).format("HH:mm:ss");

export {Player};