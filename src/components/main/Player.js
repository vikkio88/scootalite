import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
import {Button, Icon, Slider} from "react-mdl";


import './Player.css';

class Player extends Component {
    state = {
        url: 'http://rss.art19.com/episodes/a0bc6544-9833-4975-915a-dbfdfda8316d.mp3',
        playing: false,
        duration: 0,
        progress: 0,
    };

    render() {
        const {url, playing, duration, progress} = this.state;
        return (
            <div className="player-wrapper">
                <Slider min={0} max={duration} defaultValue={progress}/>
                <Button ripple onClick={() => this.setState({playing: !playing})}>
                    <Icon name={!playing ? 'play_arrow' : 'pause'}/>
                </Button>
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
                    onProgress={progress => this.setState({progress})}
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

const durationParse = duration => moment.utc(duration * 1000).format("HH:mm:ss");

export {Player};