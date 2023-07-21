import Checkbox from './Checkbox.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Checkbox />', function () {
    it('should render with on change handler', async function () {
        const fn = vi.fn();
        const { component } = render(Checkbox);

        component.$on('change', fn);

        const input = screen.getByRole('checkbox');
        fireEvent.change(input, {
            target: {
                value: true
            }
        });

        // prettier-ignore
        await waitFor(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });
    });
});
