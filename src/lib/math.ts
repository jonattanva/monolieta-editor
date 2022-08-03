export function autosize(value: number | 'auto', scrollSize: number, padding: number = 0) {
    return Math.floor((value === 'auto' ? scrollSize : value) + padding * 2);
}
