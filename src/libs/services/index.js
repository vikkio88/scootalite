import axios from 'axios';

const http = axios.create({
    baseURL: 'https://vikkio.co/scootalite-api',
    timeout: 10000
});

export const services = {
    show: {
        getAll(p = 1, l = 10){
            return http.get('/shows', {params: {p, l}}).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        getBySlug(slug){
            return http.get(`/shows/${slug}`).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        getPodcastsById(id, p = 2, l = 10){
            return http.get(`/shows/${id}/podcasts`, {params: {p, l}}).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        }
    }
};