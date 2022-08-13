import Label from './label.svelte';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';

describe('<Label />', function () {
    it('should render with placeholder', function () {
        const fn = vi.fn();
        render(Label, {
            change: fn,
            color: fn,
            item: [],
            placeholder: 'placeholder',
        });

        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('placeholder', 'placeholder');
    });

    it('should render with data test', function () {
        const fn = vi.fn();
        render(Label, {
            change: fn,
            color: fn,
            item: [],
            placeholder: 'placeholder',
            test: 'action'
        });

        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
