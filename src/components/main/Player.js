import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {Button, Icon} from "react-mdl";

class Player extends Component {
    state = {
        url: 'http://rss.art19.com/episodes/a0bc6544-9833-4975-915a-dbfdfda8316d.mp3',
        playing: false
    };

    render() {
        const {url, playing} = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({playing: !playing})}>
                    <Icon style={{fontSize: '30px'}} name={!playing ? 'play_arrow' : 'stop'}/>
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

export {Player};