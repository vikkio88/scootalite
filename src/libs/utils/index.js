import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD H:m:s';

export const humanizeTimeDiffFromNow = (date, format = DATE_FORMAT) => moment(date, format).fromNow();