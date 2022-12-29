import { getArea, getRatio, getScale, centroid, calculateEditorSize } from './display';
import { describe, it } from 'vitest';

describe('Display', function () {
    it('ration', function () {
        expect(getRatio(200, 100)).toEqual(2);
        expect(getRatio(100, 100)).toEqual(1);
        expect(getRatio(100, 0)).toEqual(Infinity);
    });

    it('scale', function () {
        const scale = {
            width: 100,
            height: 100
        };

        expect(getScale(scale)).toEqual({ width: 100, height: 100 });
        expect(getScale(scale, 2)).toEqual({ width: 200, height: 200 });
    });

    it('area', function () {
        expect(getArea(100, 100)).toEqual(10000);
        expect(getArea(0, 0)).toEqual(0);
    });

    it('centroid', function () {
        const rect = {
            x: 10,
            y: 100,
            width: 100,
            height: 100
        };

        expect(centroid(rect)).toEqual({ x: 60, y: 150 });
    });

    it('calculate editor size', function () {
        expect(calculateEditorSize({ width: 100, height: 100 }, { x: 50, y: 50 })).toEqual({
            width: 200,
            height: 200
        });
    });
});
