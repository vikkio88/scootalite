import axios from 'axios';
import {isProduction} from '../utils';

const http = axios.create({
    baseURL: 'https://vikkio.me/scootalite-api',
    timeout: 10000
});

export const services = {
    show: {
        getAll(p = 1, l = 30) {
            return http.get('/shows', {params: {p, l}}).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        getBySlug(slug) {
            return http.get(`/shows/${slug}`).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        getPodcastsById(id, p = 2, l = 10) {
            return http.get(`/shows/${id}/podcasts`, {params: {p, l}}).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        parse(feed) {
            return http.post(`/shows/parse`, {feed}).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        }
    },
    podcast: {
        getBySlug(slug) {
            return http.get(`/podcasts/${slug}`).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
    },
    stats: {
        push(action) {
            if (isProduction()) {
                return http.post(`/stats`, {action, navigator: window.navigator.userAgent});
            }
        }
    }
};
