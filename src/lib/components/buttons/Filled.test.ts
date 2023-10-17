import Filled from './Filled.svelte';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Filled />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        const { component } = render(Filled);

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });

    it('should render with data-testid', function () {
        render(Filled, {
            props: {
                testid: 'action',
                label: 'Button'
            }
        });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});