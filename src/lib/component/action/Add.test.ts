import Add from './add.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Add />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        render(Add, { click: fn });

        fireEvent.click(screen.getByRole('button'));

        expect(fn).toHaveBeenCalled();
    });

    it('should render with data test', function () {
        render(Add, { test: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
