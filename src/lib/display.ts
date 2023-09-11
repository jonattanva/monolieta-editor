import type { Axis, Rect, Size } from '$lib/type';

export const getRatio = (width: number, height: number) => width / height;

export const getArea = (width: number, height: number) => width * height;

export const getScale = (size: Size, value = 1) => ({
    width: size.width * value,
    height: size.height * value
});

export const centroid = (rect: Rect) => ({
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
});

export const calculateEditorSize = (size: Size, axis: Axis) => ({
    width: size.width + 2 * axis.x,
    height: size.height + 2 * axis.y
});

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
