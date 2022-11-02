import Message from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Message />', function () {
    it('should render with title', function () {
        render(Message, {
            title: 'The title message',
            message: 'The description message'
        });

        expect(screen.getByText(/the title message/i)).toBeInTheDocument();
    });

    it('should render with description', function () {
        render(Message, {
            title: 'The title message',
            message: 'The description message'
        });

        expect(screen.getByText(/the description message/i)).toBeInTheDocument();
    });

    it('should render with negative action handler', function () {
        const fn = vi.fn();
        const { component } = render(Message, {
            title: 'Title',
            message: 'The message',
            negativeButton: 'Cancel'
        });

        component.$on('negative', fn);

        const button = screen.getByRole('button', {
            name: /cancel/i
        });

        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });

    it('should render with positive action handler', function () {
        const fn = vi.fn();
        const { component } = render(Message, {
            title: 'Title',
            message: 'The message',
            positiveButton: 'Next'
        });

        component.$on('positive', fn);

        const button = screen.getByRole('button', {
            name: /next/i
        });

        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });
});
