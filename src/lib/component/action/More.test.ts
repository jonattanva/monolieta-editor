import More from './More.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<More />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        render(More, { click: fn });

        fireEvent.click(screen.getByRole('button'));

        expect(fn).toHaveBeenCalled();
    });

    it('should render with data test', function () {
        render(More, { test: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
