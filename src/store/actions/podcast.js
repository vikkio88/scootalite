export const SELECT_PODCAST = 'select_podcast';
export const FETCH_TRENDS_SUCCESS = 'fetch_trends_success';
export const FETCH_SHOW_SUCCESS = 'fetch_show_success';

export const selectPodcast = podcast => {
    return {
        type: SELECT_PODCAST,
        data: podcast
    }
};

export const removeFetchTrends = () => {
    const trendingShows = [
        {
            "id": 4,
            "name": "Upvoted by Reddit",
            "slug": "upvoted-by-reddit",
            "description": "Thousands of unique stories are happening on Reddit everyday, propelling people and ideas to an audience of millions. But what happens after those posts go up? What happened leading up to it? Upvoted gives these stories—from the seemingly ordinary to the extraordinary—the creative space to expand, breathe, and grow. Learn more by going beyond the upvote and see what makes Reddit so remarkable.",
            "author": "Reddit",
            "explicit": false,
            "website": "http://www.reddit.com/r/Upvoted",
            "feed_url": "http://upvoted.libsyn.com/rss",
            "logo_url": "http://static.libsyn.com/p/assets/f/8/8/e/f88e8ae9969aa923/podcast_square.png",
            "valid_for": "12",
            "language": null
        },
        {
            "id": 3,
            "name": "La Zanzara",
            "slug": "la-zanzara",
            "description": "Giuseppe Cruciani conduce \"La zanzara\", l'attualità senza tabù, senza censure, senza tagli alle vostre opinioni. Alla fine della giornata, con i titoli dei telegiornali in diretta, inchieste, voci catturate dalle tv di tutto il mondo e ospiti che non avete mai sentito, \"La zanzara\" diventa la zona franca degli ascoltatori, uno spazio nemico della banalità, l'arena dove il primo comandamento è parlare chiaro.",
            "author": "Radio 24",
            "explicit": true,
            "website": "http://www.radio24.ilsole24ore.com/programma/lazanzara",
            "feed_url": "http://www.radio24.ilsole24ore.com/podcast/lazanzara.xml",
            "logo_url": "http://www.radio24.ilsole24ore.com//assets/img/Radio24/_Immagini/2016/10/la_zanzara.jpg",
            "valid_for": "12",
            "language": null
        },
        {
            "id": 2,
            "name": "EW's Game of Thrones Weekly",
            "slug": "ews-game-of-thrones-weekly",
            "description": "Dive deep into the HBO hit fantasy series each week with Entertainment Weekly's top Westeros war correspondent James Hibberd and Greyjoy fanboy Darren Franich as they talk about what happened on the show, both on camera and behind the scenes – and what might be coming up.",
            "author": "Entertainment Weekly",
            "explicit": false,
            "website": "https://art19.com/shows/ews-game-of-thrones-weekly",
            "feed_url": "https://feeds.feedburner.com/ew-got-pod",
            "logo_url": "https://dfkfj8j276wwv.cloudfront.net/images/a9/0d/cc/14/a90dcc14-6276-432f-8235-1f57c7ede029/49e90283ca62bb4def5678918bca80d14ebc001664907f170f932e5570f36569d0f6c7d29c3b4aac0682f15d8548ce1353942393930d14b45a8fd52a61671f82.jpeg",
            "valid_for": "12",
            "language": null
        }
    ];
    return dispatch => {
        dispatch(fetchTrendsSuccess(
            {
                trendingShows
            }
        ))
    }
};

export const removeFetchShow = slug => {
    const show = {
        "id": 3,
        "name": "La Zanzara",
        "slug": "la-zanzara",
        "description": "Giuseppe Cruciani conduce \"La zanzara\", l'attualità senza tabù, senza censure, senza tagli alle vostre opinioni. Alla fine della giornata, con i titoli dei telegiornali in diretta, inchieste, voci catturate dalle tv di tutto il mondo e ospiti che non avete mai sentito, \"La zanzara\" diventa la zona franca degli ascoltatori, uno spazio nemico della banalità, l'arena dove il primo comandamento è parlare chiaro.",
        "author": "Radio 24",
        "explicit": true,
        "website": "http://www.radio24.ilsole24ore.com/programma/lazanzara",
        "feed_url": "http://www.radio24.ilsole24ore.com/podcast/lazanzara.xml",
        "logo_url": "http://www.radio24.ilsole24ore.com//assets/img/Radio24/_Immagini/2016/10/la_zanzara.jpg",
        "valid_for": "12",
        "podcasts": [
            {
                "id": 37,
                "slug": "la-zanzara2017-07-28-210831-u2s54",
                "name": "La Zanzara del giorno 28/07/2017: No pax - no vax",
                "description": "Passa il decreto Lorenzin per l'obbligo vaccinale per i bambini...",
                "duration": null,
                "date": "2017-07-28 21:08:31",
                "show_id": "3",
                "next_podcast_id": null,
                "previous_podcast_id": null,
                "file_url": "http://audio.radio24.ilsole24ore.com/radio24_audio/2017/170728-lazanzara-s.mp3"
            },
            {
                "id": 38,
                "slug": "la-zanzara2017-07-27-210232-cqyb6",
                "name": "La Zanzara del giorno 27/07/2017: La Zanzara \"ruggisce\"",
                "description": "Continua la battaglia di Cruciani contro i vitalizi. E gli ex deputati vitaliziati alzano le barricate...",
                "duration": null,
                "date": "2017-07-27 21:02:32",
                "show_id": "3",
                "next_podcast_id": null,
                "previous_podcast_id": null,
                "file_url": "http://audio.radio24.ilsole24ore.com/radio24_audio/2017/170727-lazanzara-s.mp3"
            },
            {
                "id": 39,
                "slug": "la-zanzara2017-07-26-214202-lirmc",
                "name": "La Zanzara del giorno 26/07/2017: Rich etti",
                "description": "Passa alla camera la legge di Matteo Richetti sui vitalizi...",
                "duration": null,
                "date": "2017-07-26 21:42:02",
                "show_id": "3",
                "next_podcast_id": null,
                "previous_podcast_id": null,
                "file_url": "http://audio.radio24.ilsole24ore.com/radio24_audio/2017/170726-lazanzara-s.mp3"
            }]
    };
    return dispatch => {
        dispatch(fetchShowSuccess(
            {
                show
            }
        ))
    }
};


export const fetchShowSuccess = data => {
    return {
        type: FETCH_SHOW_SUCCESS,
        data
    }
};

export const fetchTrendsSuccess = data => {
    return {
        type: FETCH_TRENDS_SUCCESS,
        data
    }
};
