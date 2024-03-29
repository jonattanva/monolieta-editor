import Fab from './Fab.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Fab />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        const { component } = render(Fab);

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });

    it('should render with data-testid', function () {
        render(Fab, {
            props: {
                testid: 'action',
                label: 'B'
            }
        });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
