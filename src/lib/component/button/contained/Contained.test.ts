import Button from './Contained.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Contained />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        const { component } = render(Button);

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });

    it('should render with data-testid', function () {
        render(Button, {
            props: {
                testid: 'action',
                label: 'Button'
            }
        });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
