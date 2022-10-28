export const isArray = (value: any) => {
    return Object.prototype.toString.call(value) === '[object Array]';
};
