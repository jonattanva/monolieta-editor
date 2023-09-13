import type { Rect } from './type';

type Option = {
    disabled: boolean;
    set: (axis: Rect) => void;
};

export default function resize(node: SVGElement, option: Option) {
    let startX = Infinity;
    let startY = Infinity;

    const onMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;

        const delta = {
            x: clientX - startX,
            y: clientY - startY
        };
    };

    const onMouseUp = (event: MouseEvent) => {
        const { clientX, clientY } = event;

        const delta = {
            x: clientX - startX,
            y: clientY - startY
        };

        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = (event: MouseEvent) => {
        startX = event.clientX;
        startY = event.clientY;

        const target = event.target as HTMLElement;
        const type = target.dataset.type || '';

        addEventListener('mousemove', onMouseMove);
        addEventListener('mouseup', onMouseUp);
    };

    node.addEventListener('mousedown', onMouseDown);
}
