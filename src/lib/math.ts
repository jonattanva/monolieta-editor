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
