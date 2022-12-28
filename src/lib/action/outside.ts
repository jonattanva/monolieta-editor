export default function outside(node: HTMLElement | SVGElement, callback: (event: Event) => void) {
    function outside(event: MouseEvent) {
        if (!node.contains(event.target as Node)) {
            callback(event);
        }
    }

    window.addEventListener('click', outside);
    return {
        destroy() {
            window.removeEventListener('click', outside);
        }
    };
}
