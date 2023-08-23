import Palette from './Pallete.svelte';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Palette />', function () {
    it('should render with click handle', function () {
        const fn = vi.fn();
        const { component } = render(Palette);

        component.$on('click', fn);

        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[2]);

        expect(fn).toHaveBeenCalled();
    });
});
