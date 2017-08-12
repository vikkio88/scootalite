import React, {Component} from 'react';
import {Card, CardMenu, CardText, CardTitle, IconButton, List} from 'react-mdl';
import {PodcastListItem as PodcastListItem} from "../podcast";


class ShowDetails extends Component {
    render() {
        const {show} = this.props;
        return (
            <div>
                <Card shadow={1} style={{width: '100%', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        textShadow: '2px 1px 2px black',
                        height: '300px',
                        background: `url(${show.logo_url}) center / cover`,
                    }}>{show.name}</CardTitle>
                    <CardText>
                        {show.description}
                    </CardText>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <h4>Podcasts</h4>
                <List>
                    {this._renderPodcasts()}
                </List>
            </div>
        );
    }

    _renderPodcasts() {
        const {show} = this.props;
        if (!show || !show.podcasts.length) {
            return <p>No podcasts</p>
        }

        return show.podcasts.map(p => <PodcastListItem podcast={p}/>)
    }
}

export {ShowDetails};