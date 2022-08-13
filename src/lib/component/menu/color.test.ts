import Color from './color.svelte';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';

describe('<Color />', function () {
    it('should render with value', function () {
        render(Color, { value: '#d1d1d1' });
        const input = screen.getByRole('textbox');

        expect(input).toHaveValue('d1d1d1');
    });

    it('should render with save handle', function () {
        const fn = vi.fn();
        render(Color, {
            save: fn,
            value: '#d1d1d1'
        });

        const input = screen.getByRole('textbox');
        expect(input).toHaveValue('d1d1d1');

        const action = screen.getByRole('button', {
            name: 'Save'
        });

        fireEvent.click(action);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
