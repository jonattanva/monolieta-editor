export default (value?: string, fontSize: number = 12) => {
    if (!value) {
        return {
            height: 0,
            width: 0
        };
    }

    const text = document.createElement('span');
    document.body.appendChild(text);

    text.style.fontSize = `${fontSize}px`;
    text.style.height = 'auto';
    text.style.width = 'auto';
    text.style.position = 'absolute';
    text.style.whiteSpace = 'no-wrap';
    text.innerHTML = value;

    const height = Math.ceil(text.clientHeight);
    const width = Math.ceil(text.clientWidth);

    document.body.removeChild(text);
    return {
        height,
        width
    };
};
