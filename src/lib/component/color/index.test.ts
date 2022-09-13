// @ts-ignore
import Color from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Color />', function () {
    it('should render with on change handler', async function () {
        const fn = vi.fn();
        render(Color, { change: fn, open: null });

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
});
