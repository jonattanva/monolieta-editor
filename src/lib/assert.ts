export const isArray = (value: unknown) => {
    return Object.prototype.toString.call(value) === '[object Array]';
};

export const isObject = (value: unknown) => {
    return Object.prototype.toString.call(value) === '[object Object]';
};
