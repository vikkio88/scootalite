import React from 'react';
import {Textfield} from 'react-mdl';

import './UrlInput.css';

const UrlInput = ({onChange}) => (
    <Textfield
        onChange={onChange}
        label="https://website.com/feed.rss"
        className="feed-url-input"
    />

);

export {UrlInput};