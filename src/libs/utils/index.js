import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD H:m:s';
export const isProduction = () => process && process.env.NODE_ENV === 'production';
export const humanizeTimeDiffFromNow = (date, format = DATE_FORMAT) => moment(date, format).add(1,'hour').fromNow();

const INITIAL_TOKEN = '?';
const PARAMS_SEPARATOR = '&';
const QUERY_PATTERN = /.*?\?/;

export const queryStringHelper = {
    stringify (query) {
        let queryString = '';
        if (query && !(query instanceof Array) && Object.keys(query).length) {
            queryString = INITIAL_TOKEN;
            Object.keys(query).forEach(key => {
                const prefix = queryString === INITIAL_TOKEN ? '' : PARAMS_SEPARATOR;
                queryString = `${queryString}${prefix}${key}=${query[key]}`
            })
        }
        return queryString
    },
    parse (queryString) {
        const query = {};
        if (!queryString) {
            return query
        }
        queryString = queryString.replace(QUERY_PATTERN, '');

        if (queryString.length) {
            const pairs = queryString.split('&');
            pairs.forEach(param => {
                const key = param.split('=')[0];
                if (key.length && !query[key]) {
                    query[key] = (param.split('=')[1])
                }
            });

            return query
        }
    }
};

export const valueFromQuery = (queryString, parameter, format = value => value, fallback = null) => {
    const value = queryStringHelper.parse(queryString)[parameter];
    return value ? format(value) : fallback
};
