import Modal from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Modal />', function () {
    it('should render with cancel handler', function () {
        const fn = vi.fn();
        const { component } = render(Modal, {
            positiveButton: 'Submit'
        });

        component.$on('cancel', fn);

        const button = screen.getByRole('button', {
            name: /cancel/i
        });

        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });

    it('should render with submit handler', function () {
        const fn = vi.fn();
        const { component } = render(Modal, {
            positiveButton: 'Submit'
        });

        component.$on('submit', fn);

        const button = screen.getByRole('button', {
            name: /submit/i
        });

        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });
});
