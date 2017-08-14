import axios from 'axios';

const http = axios.create({
    baseURL: 'https://vikkio.co/scootalite-api',
    timeout: 10000
});

export const services = {
    show: {
        getAll(page = 1, limit = 10){
            return http.get('/shows').then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        getBySlug(slug){
            return http.get(`/shows/${slug}`).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        }
    }
};