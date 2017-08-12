import React, {Component} from 'react';
import {Card, CardMenu, CardText, CardTitle, IconButton} from 'react-mdl';


class ShowDetails extends Component {
    render() {
        const {show} = this.props;
        return (
            <div>
                <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
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
                {this._renderPodcasts()}
            </div>
        );
    }

    _renderPodcasts() {

    }
}

export {ShowDetails};