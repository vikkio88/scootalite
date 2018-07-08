import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon, Tooltip} from 'react-mdl';

import {humanizeTimeDiffFromNow} from '../../libs/utils';
import {selectPodcast, stop} from '../../store/actions';
import './PodcastListItem.css';


class PodcastListItemView extends Component {
    isSelected = () => {
        const {podcast, selectedPodcast} = this.props;
        return selectedPodcast && selectedPodcast.id === podcast.id;
    };

    select = () => {
        const {select, deselect, podcast, show} = this.props;
        if (this.isSelected()) {
            deselect();
        } else {
            podcast.show = {
                ...show,
                podcasts: []
            };
            select(podcast);
        }
    };

    render() {
        const {podcast} = this.props;
        return (
            <div className={`podcast-list-item ${this.isSelected() ? 'selected-podcast' : ''}`}>
                <div className="podcast-list-item-icon-container">
                    <Button
                        ripple
                        raised
                        onClick={this.select}
                    >
                        <Icon name={`${this.isSelected() ? 'stop' : 'play_arrow'}`}
                              style={!this.isSelected() ? {color: '#ff815a'} : {}}/>
                    </Button>
                </div>
                <div className="podcast-list-item-text-container">
                    <h5>
                        {podcast.name}
                    </h5>
                    <div className="date-wrapper">
                        <Tooltip label={podcast.date}>
                            {humanizeTimeDiffFromNow(podcast.date)}
                        </Tooltip>
                    </div>
                    <p>
                        {podcast.description}
                    </p>
                    <div>
                        <Tooltip label={`Download ${podcast.name}`}>
                            <a href={podcast.file_url} download={`${podcast.name}`} target="_blank">
                                <Icon name="file_download"/>
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({player, podcasts}) => {
    const {selectedPodcast} = player;
    const {show} = podcasts;
    return {
        selectedPodcast,
        show
    };
};

const mapDispatchToProps = dispatch => {
    return {
        select(podcast) {
            dispatch(selectPodcast(podcast));
        },
        deselect() {
            dispatch(stop());
        },

    };
};

const PodcastListItem = connect(
    mapStateToProps, mapDispatchToProps
)(PodcastListItemView);


export {PodcastListItem};