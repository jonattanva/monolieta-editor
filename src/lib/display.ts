import { getRatio, getArea } from './math';
import type { Rect, Size } from '$lib/type';

export const calculateAspectRatio = (container: Size, image: Size) => {
    const ratio = getRatio(image.width, image.height);
    const containerRatio = getRatio(container.width, container.height);

    return containerRatio < ratio
        ? calculateImageInVertical(container, ratio)
        : calculateImageInHorizontal(container, ratio);
};

export const calculateImagePosition = (
    aspectRatio: Rect,
    editor: Size,
    image: Size
) => {
    const a1 = getArea(editor.width, editor.height);
    const a2 = getArea(image.width, image.height);

    if (a2 < a1) {
        aspectRatio.x = (editor.width - image.width) / 2;
        aspectRatio.y = (editor.height - image.height) / 2;
        aspectRatio.width = image.width;
        aspectRatio.height = image.height;
    } else {
        aspectRatio.width = editor.width - 2 * aspectRatio.x;
        aspectRatio.height = editor.height - 2 * aspectRatio.y;
    }

    return aspectRatio;
};

const calculateImageInHorizontal = (size: Size, ratio: number) => {
    const innerWidth = size.height * ratio;
    const x = (size.width - innerWidth) / 2;

    return {
        x: x,
        y: 0,
        width: innerWidth,
        height: size.height
    };
};

const calculateImageInVertical = (size: Size, ratio: number) => {
    const innerHeight = size.width / ratio;
    const y = (size.height - innerHeight) / 2;

    return {
        x: 0,
        y: y,
        width: size.width,
        height: innerHeight
    };
};
