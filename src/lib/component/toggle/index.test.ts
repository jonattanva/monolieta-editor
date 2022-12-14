import Toggle from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Toggle />', function () {
    it('should render with click handler', async function () {
        const fn = vi.fn();
        const { component } = render(Toggle);

        component.$on('change', fn);

        const input = screen.getByRole('checkbox');
        fireEvent.change(input, {
            target: {
                checked: true
            }
        });

        // prettier-ignore
        await waitFor(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });
    });

    it('should render with data-testid', function () {
        render(Toggle, { testid: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
