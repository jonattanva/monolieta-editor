import Rect from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Rect />', function () {
    it('should render with label', function () {
        render(Rect, {
            x: 0,
            y: 0,
            width: 10,
            height: 20,
            label: 'person'
        });
        expect(screen.getByText(/person/i)).toBeDefined();
    });

    it('should render with click handler', function () {
        const fn = vi.fn();
        const { component } = render(Rect, {
            x: 0,
            y: 0,
            width: 10,
            height: 20,
            testid: 'test'
        });

        component.$on('click', fn);

        const element = screen.getByTestId('test');
        fireEvent.click(element);

        expect(fn).toHaveBeenCalled();
    });

    it('should render with click outside', function () {
        const fn = vi.fn();
        const { container, component } = render(Rect, {
            x: 0,
            y: 0,
            width: 10,
            height: 20
        });

        component.$on('deselect', fn);
        fireEvent.click(container);

        expect(fn).toHaveBeenCalled();
    });
});
