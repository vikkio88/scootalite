import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'react-mdl';

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
        //{`${this.isSelected() ? 'stop' : 'play_arrow'}`}
        return (
            <div
                onClick={this.select}
                className={`podcast-list-item ${this.isSelected() ? 'selected-podcast' : ''}`}
            >
                <div className="podcast-list-item-icon-container">
                    <Icon name={`${this.isSelected() ? 'stop' : 'play_arrow'}`} style={{fontSize: '30px'}}/>
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