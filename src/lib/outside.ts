export default function outside(node: HTMLElement, callback: () => void) {
    function outside(event: MouseEvent) {
        if (!node.contains(event.target as Node)) {
            callback();
        }
    }

    window.addEventListener('click', outside);
    return {
        destroy() {
            window.removeEventListener('click', outside);
        }
    };
}
