export const KEY_ESC = 'Escape';
export const KEY_META = 'Meta';

type Option = {
    key: string[];
    callback?: () => void;
};

export default function (node: HTMLElement, option: Option) {
    const pressed: string[] = [];

    const clear = () => {
        pressed.splice(0, pressed.length);
    };

    const keyUp = (event: KeyboardEvent) => {
        if (!option.key.includes(event.key)) {
            return;
        }

        const isPressed = option.key.every((key) => pressed.includes(key));
        if (isPressed) {
            clear();

            const callback = option.callback ? option.callback : node.click;
            if (callback) {
                callback();
            }
        }
    };

    const keyDown = (event: KeyboardEvent) => {
        if (event.repeat) {
            return;
        }

        if (option.key.includes(event.key) && !pressed.includes(event.key)) {
            pressed.push(event.key);
        }
    };

    window.addEventListener('keyup', keyUp);
    window.addEventListener('keydown', keyDown);
    return {
        destroy() {
            clear();
            window.removeEventListener('keyup', keyUp);
            window.removeEventListener('keydown', keyDown);
        }
    };
}
