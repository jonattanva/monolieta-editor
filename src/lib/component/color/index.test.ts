import Color from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Color />', function () {
    it('should render with on change handler', async function () {
        const fn = vi.fn();
        const { component } = render(Color);

        component.$on('change', fn);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {
            target: {
                value: '333333'
            }
        });

        // prettier-ignore
        await waitFor(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });
    });

    it('should render with on click handler', async function () {
        const fn = vi.fn();
        const { component } = render(Color);

        component.$on('click', fn);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        // prettier-ignore
        await waitFor(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });
    });
});
