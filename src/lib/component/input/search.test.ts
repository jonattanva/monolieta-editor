import Search from './search.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Search />', function () {
    it('should render with placeholder', function () {
        render(Search, { placeholder: 'placeholder' });
        const input = screen.getByRole('searchbox');

        expect(input).toHaveAttribute('placeholder', 'placeholder');
    });

    it('should render with data test', function () {
        render(Search, { test: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });

    it('should render with on search', async function () {
        const fn = vi.fn();
        render(Search, { search: fn });

        const input = screen.getByRole('searchbox');
        fireEvent.change(input, {
            target: {
                value: 'comple'
            }
        });

        fireEvent.input(input, {
            target: {
                value: 'complete'
            }
        });

        // prettier-ignore
        await waitFor(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });
    });
});
