import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListItemContent} from 'react-mdl';

import {selectPodcast} from '../../store/actions';

import './PodcastListItem.css';

class PodcastListItemView extends Component {
    isSelected = () => {
        const {podcast, selectedPodcast} = this.props;
        return selectedPodcast && selectedPodcast.id === podcast.id;
    };

    select = () => {
        const {select, deselect, podcast} = this.props;
        if (this.isSelected()) {
            deselect();
        } else {
            select(podcast);
        }

    };

    render() {
        const {podcast} = this.props;
        return (
            <ListItem
                onClick={this.select}
                threeLine
                className={`podcast-list-item ${this.isSelected() ? 'selected-podcast' : ''}`}
            >
                <ListItemContent
                    avatar={`${this.isSelected() ? 'stop' : 'play_arrow'}`}
                    subtitle={podcast.description}
                >
                    {podcast.name}
                </ListItemContent>
            </ListItem>
        )
    }
}

const mapStateToProps = ({player}) => {
    const {selectedPodcast} = player;
    return {
        selectedPodcast
    };
};

const mapDispatchToProps = dispatch => {
    return {
        select(podcast){
            dispatch(selectPodcast(podcast));
        },
        deselect(){
            dispatch(selectPodcast());
        },

    };
};

const PodcastListItem = connect(
    mapStateToProps, mapDispatchToProps
)(PodcastListItemView);


export {PodcastListItem};