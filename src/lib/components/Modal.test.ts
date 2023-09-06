import Modal from './Modal.svelte';
import { describe, it, vi, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Modal />', function () {
    it('should render with positive click handle', function () {
        const fn = vi.fn();
        const { component } = render(Modal, {
            props: {
                positive: 'Accept',
                negative: 'Cancel'
            }
        });

        component.$on('submit', fn);

        const button = screen.getByRole('button', {
            name: 'Accept'
        });
        fireEvent.click(button);

        expect(fn).toHaveBeenCalled();
    });

    it('should render with negative click handle', function () {
        const fn = vi.fn();
        const { component } = render(Modal, {
            props: {
                positive: 'Accept',
                negative: 'Cancel'
            }
        });

        component.$on('cancel', fn);

        const button = screen.getByRole('button', {
            name: 'Cancel'
        });
        fireEvent.click(button);

        expect(fn).toHaveBeenCalled();
    });
});
