import type { Axis } from './type';

type Option = {
    disabled: boolean;
    set: (axis: Axis) => void;
} & Axis;

export function draggable(node: SVGElement, option: Option) {
    let startX = Infinity;
    let startY = Infinity;

    const onMouseDown = (event: MouseEvent) => {
        if (option.disabled) {
            return;
        }

        startX = event.clientX - option.x;
        startY = event.clientY - option.y;

        addEventListener('mousemove', onMouseMove);
        addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (event: MouseEvent) => {
        const x = event.clientX - startX;
        const y = event.clientY - startY;

        option.set({ x, y });
        node.style.cursor = 'all-scroll';
    };

    const onMouseUp = () => {
        node.style.cursor = 'default';

        removeEventListener('mousemove', onMouseMove);
        removeEventListener('mouseup', onMouseUp);
    };

    node.addEventListener('mousedown', onMouseDown);

    return {
        update: (values: Option) => {
            option = values;
        },

        destroy() {
            onMouseUp();
        }
    };
}
