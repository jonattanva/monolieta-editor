import Helper from './Helper.svelte';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Helper />', function () {
    it('should render with message and action label', function () {
        render(Helper, {
            props: {
                action: 'Action',
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat lorem leo, ut tristique lectus interdum eu.'
            }
        });

        expect(
            screen.getByText(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat lorem leo, ut tristique lectus interdum eu.'
            )
        ).toBeInTheDocument();
    });

    it('should render with on click handler', async function () {
        const fn = vi.fn();
        const { component } = render(Helper, {
            props: {
                action: 'Action'
            }
        });

        component.$on('click', fn);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        // prettier-ignore
        await waitFor(() => {
            expect(fn).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });
    });
});
