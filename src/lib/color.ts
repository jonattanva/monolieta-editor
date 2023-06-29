export const pallete = [
    '#212529',
    '#ced4da',
    '#c92a2a',
    '#a61e4d',
    '#862e9c',
    '#5f3dc4',
    '#364fc7',
    '#1864ab',
    '#0b7285',
    '#087f5b',
    '#2b8a3e',
    '#5c940d',
    '#e67700',
    '#d9480f'
];

export default function random(): string {
    const value = Math.floor(Math.random() * 16777215).toString(16);
    if (value.length === 6) {
        return `#${value}`;
    }
    return random();
}
