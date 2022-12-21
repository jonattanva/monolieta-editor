type Option = {
    center: Monolieta.Axis;
    set: (value: Monolieta.Rect) => void;
    rect: Monolieta.Rect;
};

export default function Resize(node: SVGElement, option: Option) {
    let startX = Infinity;
    let startY = Infinity;

    let rect: Monolieta.Rect | null = null;
    let center: Monolieta.Axis | null = null;

    const type = node.dataset.type || '';

    const onMouseDown = (event: MouseEvent) => {
        rect = option.rect;
        center = option.center;

        startX = event.clientX;
        startY = event.clientY;

        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
    };

    const onMouseMove = (event: MouseEvent) => {
        const delta = {
            x: event.clientX - startX,
            y: event.clientY - startY
        };

        if (rect !== null && center !== null) {
            option.set(apply(center, delta, rect, type));
        }
    };

    const onMouseUp = () => {
        rect = null;
        center = null;

        startX = Infinity;
        startY = Infinity;

        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
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

function apply(
    center: Monolieta.Axis,
    delta: Monolieta.Axis,
    rect: Monolieta.Rect,
    type: string
): Monolieta.Rect {
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

    let width = rect.width;
    let height = rect.height;

    switch (type) {
        case 'nw-resize': {
            const reverseX = -deltaX;
            const reverseY = -deltaY;

            width = width + reverseX;
            height = height + reverseY;

            centerX = centerX - reverseX / 2;
            centerY = centerY - reverseY / 2;
            break;
        }

        case 'n-resize': {
            const reverseY = -deltaY;
            height = height + reverseY;
            centerY = centerY - reverseY / 2;
            break;
        }

        case 'ne-resize': {
            const reverseY = -deltaY;

            width = width + deltaX;
            height = height + reverseY;

            centerX = centerX + deltaX / 2;
            centerY = centerY - reverseY / 2;
            break;
        }

        case 'e-resize': {
            width = width + deltaX;
            centerX = centerX + deltaX / 2;
            break;
        }

        case 'se-resize': {
            width = width + deltaX;
            height = height + deltaY;

            centerX = centerX + deltaX / 2;
            centerY = centerY + deltaY / 2;
            break;
        }

        case 's-resize': {
            height = height + deltaY;
            centerY = centerY + deltaY / 2;
            break;
        }

        case 'sw-resize': {
            const reverseX = -deltaX;

            width = width + reverseX;
            height = height + deltaY;

            centerX = centerX - reverseX / 2;
            centerY = centerY + deltaY / 2;
            break;
        }

        case 'w-resize': {
            const reverseX = -deltaX;
            width = width + reverseX;
            centerX = centerX - reverseX / 2;
            break;
        }
    }

    width = Math.abs(width);
    height = Math.abs(height);

    const x = centerX - width / 2;
    const y = centerY - height / 2;

    return {
        x,
        y,
        height,
        width
    };
}
