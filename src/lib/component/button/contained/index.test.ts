// @ts-ignore
import Contained from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Contained />', function () {
    it('should render with click handler', function () {
        const fn = vi.fn();
        const { component } = render(Contained);

        component.$on('click', fn);

        fireEvent.click(screen.getByRole('button'));
        expect(fn).toHaveBeenCalled();
    });
});
