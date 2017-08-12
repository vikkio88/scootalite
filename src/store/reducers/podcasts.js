import {FETCH_TRENDS_SUCCESS} from '../actions';

const shows = [
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

const initialState = {
    trendingShows: shows,// ← mock [],
    trendingPodcasts: []
};
export default function podcasts(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_TRENDS_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}