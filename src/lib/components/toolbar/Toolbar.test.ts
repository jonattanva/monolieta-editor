import Toolbar from './Toolbar.svelte';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import { Tool } from '$lib/type';

describe('<Hand />', function () {
    it('should render with click handle', function () {
        const fn = vi.fn();
        const { component } = render(Toolbar);

        component.$on('click', fn);

        fireEvent.click(screen.getByTestId(Tool.Hand));
        expect(fn).toHaveBeenCalled();
    });
});
