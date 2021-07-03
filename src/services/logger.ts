/* eslint-disable import/no-anonymous-default-export */
import Fetch from './fetch';

const dev = 'development';
const prod = 'production';

const error = (tag: string, message: any): void => {
    switch (process.env.NODE_ENV) {
        case prod:
            Fetch(`${process.env.SERVER_URL}/logger`, {
                method: 'POST',
                body: JSON.stringify({
                    type: 'error',
                    key: tag,
                    value: message,
                }),
            })
                .then(() => {})
                .catch(() => {});
            break;
        case dev:
        default:
            console.error(tag, message);
    }
};

const warn = (tag: string, message: any): void => {
    switch (process.env.NODE_ENV) {
        case prod:
            Fetch(`${process.env.SERVER_URL}/logger`, {
                method: 'POST',
                body: JSON.stringify({
                    type: 'warn',
                    key: tag,
                    value: message,
                }),
            })
                .then(() => {})
                .catch(() => {});
            break;
        case dev:
        default:
            console.warn(tag, message);
    }
};

const log = (tag: string, message: any): void => {
    switch (process.env.NODE_ENV) {
        case prod:
            Fetch(`${process.env.SERVER_URL}/logger`, {
                method: 'POST',
                body: JSON.stringify({
                    type: 'log',
                    key: tag,
                    value: message,
                }),
            })
                .then(() => {})
                .catch(() => {});
            break;
        case dev:
        default:
            console.log(tag, message);
    }
};

export default {
    error,
    log,
    warn,
};
