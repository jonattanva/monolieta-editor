import type { Axis } from './type';
import type { Action } from 'svelte/action';

interface Attributes {
    'on:draggableend': (event: CustomEvent<Axis>) => void;
    'on:draggablestart': () => void;
}

type Option = {
    disabled: boolean;
    update: (axis: Axis) => void;
} & Axis;

export const draggable: Action<SVGElement, Option, Attributes> = (
    node,
    option
) => {
    let startX = Infinity;
    let startY = Infinity;

    const onMouseMove = (event: MouseEvent) => {
        const x = event.clientX - startX;
        const y = event.clientY - startY;

        option.update({ x, y });
        node.style.cursor = 'all-scroll';
    };

    const onMouseUp = (event: MouseEvent) => {
        const x = event.clientX - startX;
        const y = event.clientY - startY;

        node.style.cursor = 'default';

        node.dispatchEvent(
            new CustomEvent('draggableend', {
                detail: { x, y }
            })
        );

        removeEventListener('mouseup', onMouseUp);
        removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = (event: MouseEvent) => {
        startX = event.clientX - option.x;
        startY = event.clientY - option.y;

        node.dispatchEvent(new CustomEvent('draggablestart'));

        addEventListener('mouseup', onMouseUp);
        addEventListener('mousemove', onMouseMove);
    };

    if (!option.disabled) {
        node.addEventListener('mousedown', onMouseDown);
    }

    return {
        update: (parameter: Option) => {
            option = parameter;
        },

        destroy() {
            node.style.cursor = 'default';

            removeEventListener('mouseup', onMouseUp);
            removeEventListener('mousemove', onMouseMove);
        }
    };
};
