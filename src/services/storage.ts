/* eslint-disable import/no-anonymous-default-export */
const set = (key: string, value: any): void => {
    if (typeof value === 'string') {
        localStorage.setItem(key, value);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

const get = (key: string): any => {
    let value: any = null;
    try {
        value = JSON.parse(localStorage.getItem(key) ?? '');
    } catch (error) {
        value = localStorage.getItem(key);
    }
    return value;
};

const remove = (key: string): void => localStorage.removeItem(key);

const clear = (): void => localStorage.clear();

export default {
    set,
    get,
    remove,
    clear,
};
