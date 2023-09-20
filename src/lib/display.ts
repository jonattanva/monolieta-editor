import math from './math';
import type { Rect, Size } from './type';

const aspectRatio = (container: Size, image: Size): Rect => {
    const imageRatio = math.ratio(image.width, image.height);
    const containerRatio = math.ratio(container.width, container.height);

    return containerRatio < imageRatio
        ? vertical(container, imageRatio)
        : horizontal(container, imageRatio);
};

export const image = (aspectRatio: Rect, editor: Size, image: Size): Rect => {
    const a1 = math.area(editor.width, editor.height);
    const a2 = math.area(image.width, image.height);

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

const vertical = (size: Size, ratio: number): Rect => {
    const innerHeight = size.width / ratio;
    const y = (size.height - innerHeight) / 2;

    return {
        x: 0,
        y: y,
        width: size.width,
        height: innerHeight
    };
};

const horizontal = (size: Size, ratio: number): Rect => {
    const innerWidth = size.height * ratio;
    const x = (size.width - innerWidth) / 2;

    return {
        x: x,
        y: 0,
        width: innerWidth,
        height: size.height
    };
};

export default {
    aspectRatio,
    image
};
