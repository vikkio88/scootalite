import React, {Component} from 'react';
import {Card, CardActions, CardTitle} from 'react-mdl';

import {withRouter} from 'react-router-dom';


class ShowCardView extends Component {
    render() {
        const {show, history} = this.props;
        return (
            <Card
                shadow={1}
                onClick={() => history.push(`/shows/${show.slug}`)}
                style={{
                    height: '300px',
                    background: `url(${show.logo_url}) center / cover`,
                    margin: '10px',
                    cursor: 'pointer'
                }}>
                <CardTitle expand/>
                <CardActions
                    style={{
                        height: '52px',
                        padding: '16px',
                        background: 'rgba(0,0,0,0.2)'
                    }}
                >
                    <span
                        style={{
                            color: '#fff', fontSize: '14px', fontWeight: '500', textShadow: '2px 1px 2px black'
                        }}
                    >
                        {show.name}
                    </span>
                </CardActions>
            </Card>
        );
    }
}

const ShowCard = withRouter(ShowCardView);
export {ShowCard};
