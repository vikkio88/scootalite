import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'react-mdl';

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
            <div
                onClick={this.select}
                className={`podcast-list-item ${this.isSelected() ? 'selected-podcast' : ''}`}
            >
                <div className="podcast-list-item-icon-container">
                    <Icon name={`${this.isSelected() ? 'stop' : 'play_arrow'}`}
                          style={!this.isSelected() ? {color: '#ff815a'} : {}}/>
                </div>
                <div className="podcast-list-item-text-container">
                    <h5>
                        {podcast.name}
                    </h5>
                    <p>
                        {podcast.description}
                    </p>
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
        select(podcast){
            dispatch(selectPodcast(podcast));
        },
        deselect(){
            dispatch(stop());
        },

    };
};

const PodcastListItem = connect(
    mapStateToProps, mapDispatchToProps
)(PodcastListItemView);


export {PodcastListItem};