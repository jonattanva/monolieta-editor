import { Edge } from './type';
import type { Axis, Rect } from './type';

type Option = {
    center: Axis;
    disabled: boolean;
    resize: (axis: Rect) => void;
} & Rect;

export default function resize(node: SVGElement, option: Option) {
    let startX = Infinity;
    let startY = Infinity;
    let type: Edge | null = null;

    const onMouseMove = (event: MouseEvent) => {
        // prettier-ignore
        const { 
            clientX, 
            clientY 
        } = event;

        const delta = {
            x: clientX - startX,
            y: clientY - startY
        };

        if (type) {
            const position = {
                height: option.height,
                width: option.width,
                x: option.x,
                y: option.y
            };

            option.resize(calculate(delta, option.center, position, type));
        }
    };

    const onMouseUp = (event: MouseEvent) => {
        // prettier-ignore
        const { 
            clientX, 
            clientY 
        } = event;

        const delta = {
            x: clientX - startX,
            y: clientY - startY
        };

        if (type) {
            const position = {
                height: option.height,
                width: option.width,
                x: option.x,
                y: option.y
            };

            option.resize(calculate(delta, option.center, position, type));
        }

        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = (event: MouseEvent) => {
        startX = event.clientX;
        startY = event.clientY;

        const target = event.target as HTMLElement;
        type = target.dataset.type as Edge;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    node.addEventListener('mousedown', onMouseDown);

    return {
        destroy() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);

            node.removeEventListener('mousedown', onMouseDown);
        }
    };
}

function calculate(delta: Axis, center: Axis, rect: Rect, edge: Edge) {
    // prettier-ignore
    const { 
        x: deltaX, 
        y: deltaY 
    } = delta;

    // prettier-ignore
    let { 
        x: centerX, 
        y: centerY 
    } = center;

    switch (edge) {
        case Edge.NW: {
            const reverseX = -deltaX;
            const reverseY = -deltaY;

            rect.width = rect.width + reverseX;
            rect.height = rect.height + reverseY;

            centerX = centerX - reverseX / 2;
            centerY = centerY - reverseY / 2;
            break;
        }

        case Edge.N: {
            const reverseY = -deltaY;
            rect.height = rect.height + reverseY;
            centerY = centerY - reverseY / 2;
            break;
        }

        case Edge.NE: {
            const reverseY = -deltaY;

            rect.width = rect.width + deltaX;
            rect.height = rect.height + reverseY;

            centerX = centerX + deltaX / 2;
            centerY = centerY - reverseY / 2;
            break;
        }

        case Edge.E: {
            rect.width = rect.width + deltaX;
            centerX = centerX + deltaX / 2;
            break;
        }

        case Edge.SE: {
            rect.width = rect.width + deltaX;
            rect.height = rect.height + deltaY;

            centerX = centerX + deltaX / 2;
            centerY = centerY + deltaY / 2;
            break;
        }

        case Edge.S: {
            rect.height = rect.height + deltaY;
            centerY = centerY + deltaY / 2;
            break;
        }

        case Edge.SW: {
            const reverseX = -deltaX;

            rect.width = rect.width + reverseX;
            rect.height = rect.height + deltaY;

            centerX = centerX - reverseX / 2;
            centerY = centerY + deltaY / 2;
            break;
        }

        case Edge.W: {
            const reverseX = -deltaX;
            rect.width = rect.width + reverseX;
            centerX = centerX - reverseX / 2;
            break;
        }
    }

    rect.width = Math.abs(rect.width);
    rect.height = Math.abs(rect.height);

    rect.x = centerX - rect.width / 2;
    rect.y = centerY - rect.height / 2;

    return rect;
}
