import Text from './Text.svelte';
import { describe, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Text />', function () {
    it('should render with placeholder', function () {
        render(Text, { placeholder: 'placeholder' });
        const input = screen.getByRole('textbox');

        expect(input).toHaveAttribute('placeholder', 'placeholder');
    });

    it('should render with data test', function () {
        render(Text, { test: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
