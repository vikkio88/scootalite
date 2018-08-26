import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD H:m:s';
export const isProduction = () => process && process.env.NODE_ENV === 'production';
export const humanizeTimeDiffFromNow = (date, format = DATE_FORMAT) => moment(date, format).add(1,'hour').fromNow();
