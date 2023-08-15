import '@testing-library/jest-dom';
import Picture from './Picture.svelte';
import { describe, it, expect } from 'vitest';
import { render, waitFor, screen } from '@testing-library/svelte';

describe('<Picture />', function () {
    it('should render with data-testid', async function () {
        const file = new window.File(['23 43 21'], 'chucknorris.png', {
            type: 'image/png'
        });

        render(Picture, {
            testid: 'image',
            src: file
        });

        // prettier-ignore
        await waitFor(() => {
            expect(screen.getByTestId('image')).toBeInTheDocument();
        }, { timeout: 1000 })
    });
});
