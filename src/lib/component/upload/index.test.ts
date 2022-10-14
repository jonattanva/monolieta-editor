// @ts-ignore
import Upload from './index.svelte';
import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';

describe('<Upload />', function () {
    it('should render with change handler', function () {
        const fn = vi.fn();
        const { container, component } = render(Upload);

        component.$on('change', fn);

        const input = container.querySelector('input[type=file]');
        fireEvent.change(input!);

        expect(fn).toHaveBeenCalled();
    });
});
