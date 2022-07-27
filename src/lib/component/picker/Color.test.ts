import Color from './Color.svelte';
import { describe, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Color />', function () {
    it('should render with click handler', async function () {
        render(Color, { color: '333' });
        const button = screen.getByRole('button');

        await fireEvent.click(button);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with click outside handler', async function () {
        render(Color);
        const button = screen.getByRole('button');

        await fireEvent.click(button);

        expect(screen.getByRole('textbox')).toBeInTheDocument();

        await fireEvent.click(document.body);

        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });
});
