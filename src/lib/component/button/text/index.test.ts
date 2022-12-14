import Text from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Text />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        const { component } = render(Text);

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });

    it('should render with data-testid', function () {
        render(Text, { testid: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
