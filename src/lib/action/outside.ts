export default function outside(node: HTMLElement, callback: () => void) {
    function onOutside(event: MouseEvent) {
        if (!node.contains(event.target as Node)) {
            callback();
        }
    }

    window.addEventListener('click', onOutside);
    return {
        destroy() {
            window.removeEventListener('click', onOutside);
        }
    };
}
