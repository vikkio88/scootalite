import React, {Component} from 'react';
import {Icon, ListItem, ListItemAction, ListItemContent} from 'react-mdl';

import './PodcastListItem.css';

class PodcastListItem extends Component {
    render() {
        const {podcast} = this.props;
        return (
            <ListItem threeLine className="podcast-list-item">
                <ListItemContent
                    subtitle={podcast.description}
                >
                    {podcast.name}
                </ListItemContent>
                <ListItemAction>
                    <a href="#"><Icon name="play_arrow"/></a>
                </ListItemAction>
            </ListItem>
        )
    }
}

export {PodcastListItem};