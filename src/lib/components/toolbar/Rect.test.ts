import Rect from './Rect.svelte';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Hand />', function () {
    it('should render with click handle', function () {
        const fn = vi.fn();
        const { component } = render(Rect);

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });

    it('should render with data-testid', function () {
        render(Rect, {
            props: {
                testid: 'action'
            }
        });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
