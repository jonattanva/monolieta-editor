import type { Rect, Vector } from '$lib/type';

const area = (width: number, height: number): number => {
    return width * height;
};

const ratio = (width: number, height: number): number => {
    return width / height;
};

const scale = (vector: Vector, value = 1): Vector => ({
    x: vector.x * value,
    y: vector.y * value
});

const centroid = (rect: Rect): Vector => ({
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
});

export default {
    area,
    centroid,
    ratio,
    scale
};
