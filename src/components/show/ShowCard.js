import React, {Component} from 'react';
import {Card, CardActions, CardTitle} from 'react-mdl';


class ShowCard extends Component {
    render() {
        const {show} = this.props;
        return (
            <Card
                shadow={1}
                onClick={() => console.log('clicked')}
                style={{
                    width: '256px',
                    height: '256px',
                    background: `url(${show.logo_url}) center / cover`,
                    margin: 'auto',
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


export {ShowCard};