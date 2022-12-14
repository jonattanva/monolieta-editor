import Select from './index.svelte';
import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';

describe('<Select />', function () {
    it('should render with change handler', function () {
        const fn = vi.fn();
        const { component } = render(Select, {
            options: [
                { label: 'The Lord of the Rings', value: '1' },
                { label: 'The Hobbit', value: '2' }
            ]
        });

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });
});
