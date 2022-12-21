type Option = {
    set: (axis: Monolieta.Axis) => void;
};

export default function draggable(node: SVGElement, option: Option) {
    let startX = Infinity;
    let startY = Infinity;

    const onMouseDown = (event: MouseEvent) => {
        const x = Number(node.getAttribute('x'));
        const y = Number(node.getAttribute('y'));

        startX = event.clientX - x;
        startY = event.clientY - y;

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
