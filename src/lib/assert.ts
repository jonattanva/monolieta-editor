export const isArray = (value: any) => {
    return Object.prototype.toString.call(value) === '[object Array]';
};

export const isObject = (value: any) => {
    return Object.prototype.toString.call(value) === '[object Object]';
};
